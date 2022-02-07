import { Router } from 'express';
import {
  utenteDelete,
  utenteGet,
  utenteGetID,
  utentePut
} from '../controllers/utenti';
import { checkUtenteId } from '../validation/validations';
// import { check } from 'express-validator';
// import { validarCampos } from '../middlewares/validarcampos';

const router = Router();

router.get('/', utenteGet);

router.get('/:id', checkUtenteId, utenteGetID);

router.put('/:id', checkUtenteId, utentePut);

router.delete('/:id', checkUtenteId, utenteDelete);

module.exports = router;
