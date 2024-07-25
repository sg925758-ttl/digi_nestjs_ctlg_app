import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid(
    'development',
    'cv/development',
    'ev/development',
    'pv/development',
    'cv/production',
    'ev/production',
    'pv/production',
    'cv/staging',
    'ev/staging',
    'pv/staging',
    'test',
    'provision',
  ),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().required(),
  PORT: Joi.number().default(3000),
});