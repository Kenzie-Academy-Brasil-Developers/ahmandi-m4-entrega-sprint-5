import { Request, Response } from 'express';
import scheduleCreateService from '../../services/schedules/createSchedule.service';

const scheduleCreateController = async (req: Request, res: Response) => {
	const schedule = await scheduleCreateService(req.body);

	return res
		.status(201)
		.json({ message: 'Created successfully', schedules: schedule });
};

export default scheduleCreateController;
