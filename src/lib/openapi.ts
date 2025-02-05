import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

export const registry = new OpenAPIRegistry();

// Define common schemas
export const ErrorResponse = registry.register(
  'ErrorResponse',
  z.object({
    message: z.string().describe('Error message'),
    code: z.string().optional().describe('Error code')
  })
);

// Define authentication schemas
export const AuthResponse = registry.register(
  'AuthResponse',
  z.object({
    token: z.string().describe('JWT access token'),
    user: z.object({
      id: z.string(),
      email: z.string().email(),
      name: z.string().optional()
    })
  })
);

export const LoginRequest = registry.register(
  'LoginRequest',
  z.object({
    email: z.string().email().describe('User email'),
    password: z.string().min(6).describe('User password')
  })
);

// Register authentication endpoints
registry.registerPath({
  method: 'post',
  path: '/api/auth/login',
  description: 'Authenticate user and get access token',
  request: {
    body: {
      content: {
        'application/json': {
          schema: LoginRequest
        }
      }
    }
  },
  responses: {
    200: {
      description: 'Successful authentication',
      content: {
        'application/json': {
          schema: AuthResponse
        }
      }
    },
    400: {
      description: 'Invalid credentials',
      content: {
        'application/json': {
          schema: ErrorResponse
        }
      }
    }
  }
});
