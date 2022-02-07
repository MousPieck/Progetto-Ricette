import { Router } from 'express';
import {
  prodottiGet,
  prodottiPost,
  prodottiGetId,
  prodottiDeleteId,
  prodottiPut
} from '../controllers/prodotti';
import { checkUtenteId } from '../validation/validations';

const router = Router();

router.get('/', prodottiGet);
router.get('/:id', checkUtenteId, prodottiGetId);
router.post('/:id', checkUtenteId, prodottiPost);
router.put('/:id', checkUtenteId, prodottiPut);
router.delete('/:id', checkUtenteId, prodottiDeleteId);
module.exports = router;
