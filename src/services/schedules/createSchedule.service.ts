import AppDataSource from '../../data-source';
import { Property } from '../../entities/properties.entity';
import { Schedules } from '../../entities/schedule.entity';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IScheduleRequest } from '../../interfaces/schedules';

const scheduleCreateService = async (scheduleReq: IScheduleRequest) => {
	const scheduleRepository = AppDataSource.getRepository(Schedules);
	const userRepository = AppDataSource.getRepository(User);
	const propertyRepository = AppDataSource.getRepository(Property);

	const user = await userRepository.findOneBy({ id: scheduleReq.userId });

	if (!user) {
		throw new AppError('User not found', 404);
	}

	const property = await propertyRepository.findOneBy({
		id: scheduleReq.propertyId,
	});

	if (!property) {
		throw new AppError('Property not found', 404);
	}

	const date = new Date();
	const hour = new Date();

	const dateObj = new Date(`${date}, ${hour}`);

	const scheduleAlreadyExists = await scheduleRepository.findOneBy({
		date: dateObj,
		hour: dateObj,
	});

	if (scheduleAlreadyExists) {
		throw new AppError('Schedule already exists', 400);
	}

	const schedules = scheduleRepository.create({
		user: user,
		properties: property,
		date: dateObj,
		hour: dateObj,
	});

	await scheduleRepository.save(schedules);

	return schedules;
};

export default scheduleCreateService;
