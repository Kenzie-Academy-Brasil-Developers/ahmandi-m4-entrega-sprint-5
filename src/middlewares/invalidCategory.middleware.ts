// import { Request, Response, NextFunction } from 'express';
// import 'dotenv/config';
// import AppDataSource from '../data-source';
// import { Category } from '../entities/categories.entity';
// import { Property } from '../entities/properties.entity';

// const invalidCategoryMiddleWare = async (
// 	req: Request,
// 	res: Response,
// 	next: NextFunction
// ) => {

//     const categoryRepository = AppDataSource.getRepository(Category);
//     const propertyRepository = AppDataSource.getRepository(Property);

// 	const category = await categoryRepository.findOneBy({id: });

// 	return next();
// };

// export default invalidCategoryMiddleWare;
