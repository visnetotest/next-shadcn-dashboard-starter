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
        schemas: registry.schemas
      }
    }
  });

  return NextResponse.json(spec);
}
