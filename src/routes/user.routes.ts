import { Router } from 'express';
import userCreateController from '../controllers/user/createUser.controller';
import userDeleteSelfController from '../controllers/user/deleteUser.controller';
import userListController from '../controllers/user/listUsers.controller';
import userLoginController from '../controllers/user/loginUser.controller';
import userUpdateController from '../controllers/user/updateUser.controller';
import ensureisAdm from '../middlewares/ensureIsAdm.middleware';
import invalidIDMiddleWare from '../middlewares/invalidID.middleware';
import ensureAuthMiddleware from '../middlewares/userAuth.middleware';
import verifyUserMiddleware from '../middlewares/userVerify.middleware';

const router = Router();

router.get('/users', ensureAuthMiddleware, ensureisAdm, userListController);

router.post('/users', userCreateController);
router.post('/login', userLoginController);

router.patch(
	'/users/:id',
	ensureAuthMiddleware,
	invalidIDMiddleWare,
	userUpdateController
);
router.delete(
	'/users/:id',
	ensureAuthMiddleware,
	ensureisAdm,
	verifyUserMiddleware,
	userDeleteSelfController
);

export default router;
