import dotenv from 'dotenv';
dotenv.config();
export const varb = {
  port: process.env.PORT as string | number,
  mongodbUrl: process.env.MONGODB_URL as string,
  usersPath: '/api/utenti',
  usersAth: '/api/',
  prodottiPath: '/api/prodotti',
  statof: { stato: false },
  statot: { stato: true }
};
