import { Router } from 'express';
import categoryCreateController from '../controllers/categories/createCategory.controller';
import categoryListController from '../controllers/categories/listCategories.controller';
import ensureAuthMiddleware from '../middlewares/userAuth.middleware';
import ensureisAdm from '../middlewares/ensureIsAdm.middleware';
import categoryListOneController from '../controllers/categories/listOneCategory.service';

const router = Router();

router.post(
	'/categories',
	ensureAuthMiddleware,
	ensureisAdm,
	categoryCreateController
);
router.get('/categories', categoryListController);
router.get('/categories/:categoryId/properties', categoryListOneController);

export default router;
