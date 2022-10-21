import AppDataSource from '../../data-source';
import { AppError } from '../../errors/appError';
import { Schedules } from '../../entities/schedule.entity';

const listSchedulesService = async (propertyId: string) => {
	const schedulesRepository = AppDataSource.getRepository(Schedules);

	const schedule = await schedulesRepository.find({
		where: {
			properties: {
				id: propertyId,
			},
		},
		relations: {
			properties: true,
			user: true,
		},
	});

	if (schedule.length === 0) {
		throw new AppError('Schedule not found', 404);
	}

	return schedule;
};

export default listSchedulesService;
