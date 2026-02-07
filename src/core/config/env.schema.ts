import { z } from 'zod';

export const envSchema = z.object({
  SERVICE_NAME: z.string(),
  DATABASE_URL: z.string(),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
});

export type EnvConfig = z.infer<typeof envSchema>;
