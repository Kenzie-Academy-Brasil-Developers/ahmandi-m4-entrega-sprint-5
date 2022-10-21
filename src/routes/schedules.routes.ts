import { Router } from 'express';
import scheduleCreateController from '../controllers/schedules/createSchedule.controller';
import listSchedulesController from '../controllers/schedules/listSchedules.controller';
import ensureisAdm from '../middlewares/ensureIsAdm.middleware';
import ensureAuthMiddleware from '../middlewares/userAuth.middleware';

const router = Router();

router.post('/schedules', ensureAuthMiddleware, scheduleCreateController);
router.get(
	'/schedules/properties/:id',
	ensureAuthMiddleware,
	ensureisAdm,
	listSchedulesController
);

export default router;
