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
        msg: `Il e-mail: ${email},non esiste`
      });
    } else {
      const utente: Boolean = bcrypt.compareSync(password, utent.password);
      if (utente) {
        return res.json({
          msg: `login`,
          id: utent._id
        });
      } else {
        return res.json({
          msg: `La password non è corretta`
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
    const utente = new Utente(req.body);
    const { email } = req.body;
    const utent = await Utente.findOne({ email });
    if (utent) {
      return res.json({
        msg: 'Il email esiste'
      });
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
