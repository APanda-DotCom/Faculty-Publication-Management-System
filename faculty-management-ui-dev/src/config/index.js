import dotenv from "dotenv";

dotenv.config();
export default {
  database: {
    mysql: {
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      timezone: "+00:00",
    },
  },

  Mail: {
    from_email: process.env.SMTP_FROM_EMAIL,
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
  },

  jwt_secret: process.env.JWT_SECRET,
  jwt_expire: process.env.JWT_EXPIRE,

  adminBaseUrl: {
    baseUrl: process.env.ADMIN_URL,
  },

  app: {
    siteName: process.env.SITE_NAME,
    baseUrl: process.env.BASE_URL,
    mediaStorage: "local",
    mediaUploadSizeLimit: 1024 * 1024 * 15,
    setBaseUrl(url) {
      this.baseUrl = url;
    },
  },
};
