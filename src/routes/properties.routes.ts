import { Router } from 'express';

import propertyCreateController from '../controllers/properties/createProperty.controller';
import propertiesListController from '../controllers/properties/listProperty.controller';
import ensureisAdm from '../middlewares/ensureIsAdm.middleware';
import ensureAuthMiddleware from '../middlewares/userAuth.middleware';

const router = Router();

router.post(
	'/properties',
	ensureAuthMiddleware,
	ensureisAdm,
	propertyCreateController
);
router.get('/properties', propertiesListController);

export default router;
