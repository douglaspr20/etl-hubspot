import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  ETL_MODE: Joi.string().valid('mock', 'live').default('mock'),
  HUBSPOT_TOKEN: Joi.string().allow('').optional(),
  HUBSPOT_API_BASE: Joi.string().uri().default('https://api.hubapi.com'),
  DATABASE_URL: Joi.string().uri().optional().allow(''),
  DATABASE_HOST: Joi.string().when('DATABASE_URL', {
    is: Joi.exist().not(null).not(''),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
  DATABASE_PORT: Joi.number().when('DATABASE_URL', {
    is: Joi.exist().not(null).not(''),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
  DATABASE_USER: Joi.string().when('DATABASE_URL', {
    is: Joi.exist().not(null).not(''),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
  DATABASE_PASS: Joi.string().when('DATABASE_URL', {
    is: Joi.exist().not(null).not(''),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
  DATABASE_NAME: Joi.string().when('DATABASE_URL', {
    is: Joi.exist().not(null).not(''),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
  TYPEORM_SYNC: Joi.boolean().default(true),
});
