import AppDataSource from '../../data-source';
import { Category } from '../../entities/categories.entity';
import { AppError } from '../../errors/appError';

const categoryListOneService = async (categoryId: string) => {
	const categoryRepository = AppDataSource.getRepository(Category);

	const category = await categoryRepository.find({
		where: {
			id: categoryId,
		},
		relations: {
			properties: true,
		},
	});

	if (!category[0]) {
		throw new AppError('Category not found', 404);
	}

	return category[0];
};

export default categoryListOneService;
