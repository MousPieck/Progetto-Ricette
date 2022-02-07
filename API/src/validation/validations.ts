import { NextFunction, request, response } from 'express';
import { check, param } from 'express-validator';
import { validazioneCampi } from '../middlewares/validations';

const checkLogin = [
  check('email').notEmpty().isEmail().withMessage('non è un email valido'),
  check('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('la password deve avere almeno 6 caratteri'),
  (req = request, res = response, next: NextFunction) => {
    validazioneCampi(req, res, next);
  }
];

const checkSignUp = [
  check('nome').notEmpty().withMessage('il nome non è valido'),
  check('cognome').notEmpty().withMessage('il cognome non è valido'),
  check('email').notEmpty().isEmail().withMessage('non è un email valido'),
  check('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('la password deve avere almeno 6 caratteri'),
  (req = request, res = response, next: NextFunction) => {
    validazioneCampi(req, res, next);
  }
];

const checkUtenteId = [
  param('id').isMongoId(),
  (req = request, res = response, next: NextFunction) => {
    validazioneCampi(req, res, next);
  }
];

export { checkLogin, checkSignUp, checkUtenteId };
