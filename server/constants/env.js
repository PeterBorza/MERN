export const getEnv = (key, defaultValue) => {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw Error(`Missing String environment variable for ${key}`);
  }

  return value;
};

export const NODE_ENV = getEnv("NODE_ENV", "development");
export const PORT = getEnv("PORT", "5005");
export const MONGO_URI = getEnv("MONGO_URI");
export const APP_ORIGIN = getEnv("APP_ORIGIN");
export const PROD_URL = getEnv("PROD_URL");
// export const JWT_SECRET = getEnv("JWT_SECRET");
// export const JWT_REFRESH_SECRET = getEnv("JWT_REFRESH_SECRET");
// export const EMAIL_SENDER = getEnv("EMAIL_SENDER");
// export const RESEND_API_KEY = getEnv("RESEND_API_KEY");
