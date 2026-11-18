import 'dotenv/config';

export const config = {
  port: Number(process.env.PORT || 5000),
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  jwtSecret: process.env.JWT_SECRET || 'dev-secret-rjr-ca-firm',
  databaseUrl: process.env.DATABASE_URL || '',
  isProduction: process.env.NODE_ENV === 'production',
};
