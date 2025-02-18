import { registry } from '@/lib/openapi';
import { createSwaggerSpec } from 'next-swagger-doc';
import { NextResponse } from 'next/server';

export async function GET() {
  const spec = createSwaggerSpec({
    apiFolder: 'src/app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'DashFlow API Documentation',
        version: '1.0.0',
        description: 'API documentation for the DashFlow application'
      },
      components: {
        schemas: Object.fromEntries(
          registry.definitions
            .map((def) => {
              if ('type' in def && def.type === 'schema') {
                return [def.schema.description || 'Schema', def.schema];
              }
              return [];
            })
            .filter((entry) => entry.length > 0)
        )
      }
    }
  });

  return NextResponse.json(spec);
}
