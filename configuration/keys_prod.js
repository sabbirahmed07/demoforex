module.exports = {
  JWT_SECRET: process.env.JWT,
  DB_URL: process.env.MONGO_URI,

  oauth: {
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }
  }
};
