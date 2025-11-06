export const configuration = () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  etl: {
    mode: process.env.ETL_MODE || 'mock',
  },
  hubspot: {
    token: process.env.HUBSPOT_TOKEN || '',
    apiBase: process.env.HUBSPOT_API_BASE || 'https://api.hubapi.com',
  },
  database: {
    url: process.env.DATABASE_URL || undefined,
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
    user: process.env.DATABASE_USER || 'postgres',
    pass: process.env.DATABASE_PASS || 'postgres',
    name: process.env.DATABASE_NAME || 'hubspot_dw',
  },
  typeorm: {
    synchronize: process.env.TYPEORM_SYNC === 'true',
  },
});
