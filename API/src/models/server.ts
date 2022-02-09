import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import dbConnection from '../db/mongodb';
import { varb } from '../content/varb';
import multer from '../libs/multer';

dotenv.config();
class Server {
  private app = express();
  private port: number | string = varb.port;
  protected usersPath: string = varb.usersPath;
  protected usersAth: string = varb.usersAth;
  protected prodottiPath: string = varb.prodottiPath;
  constructor() {
    this.app;
    this.port;
    this.connectdb();
    this.middlewares();
    this.routersV();
    this.listen();
  }
  private async connectdb(): Promise<void> {
    await dbConnection();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.text({ type: 'text/html' }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(multer.single('file'));
  }

  private routersV(): void {
    this.app.use(this.usersPath, require('../routers/utenti'));
    this.app.use(this.usersAth, require('../routers/login'));
    this.app.use(this.prodottiPath, require('../routers/prodotti'));
  }

  private listen(): void {
    this.app.listen(this.port, () => {
      console.log(`app iniziata in ${this.port}`);
    });
  }
}

export default Server;
