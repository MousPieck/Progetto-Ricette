import { Utente } from './../models/usuarios';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { IUTente } from '../interface/model-utenti';

const loginPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    const { email, password }: IUTente = req.body;
    console.log(req.body);
    const utent: IUTente = await Utente.findOne({ email });
    if (!utent) {
      return res.json({
        msgError: `Il e-mail: ${email},non esiste`
      });
    } else {
      const pass: Boolean = bcrypt.compareSync(password, utent.password);
      if (pass) {
        return res.json({
          msg: `login`,
          id: utent._id
        });
      } else {
        return res.json({
          msgError: `La password non è corretta`
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const signUpPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    const utente: IUTente = new Utente(req.body);
    const { email }: IUTente = req.body;
    const utent: IUTente = await Utente.findOne({ email });
    if (utent) {
      res.json({
        msgError: 'Il email esiste'
      });
      return;
    }
    await utente.save();
    res.json({
      msg: 'register'
    });
  } catch (error) {
    console.log(error);
  }
};
export { loginPost, signUpPost };
