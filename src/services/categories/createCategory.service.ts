import AppDataSource from '../../data-source';
import { Category } from '../../entities/categories.entity';
import { AppError } from '../../errors/appError';
import { ICategoryRequest } from '../../interfaces/categories';

const categoryCreateService = async (categoryReq: ICategoryRequest) => {
	const categoryRepository = AppDataSource.getRepository(Category);

	const categoryAlreadyExists = await categoryRepository.findOneBy({
		name: categoryReq.name,
	});

	if (categoryAlreadyExists) {
		throw new AppError('Category already exists', 400);
	}

	const category = categoryRepository.create({ name: categoryReq.name });

	await categoryRepository.save(category);

	return category;
};

export default categoryCreateService;
