import 'dotenv/config'; // This loads .env file into process.env

export default {
  expo: {
    extra: {
      FIREBASE_KEY: process.env.FIREBASE_KEY,
    },
  }
};
