import { Request, Response } from 'express';
import { AppError } from '../../errors/appError';
import categoryListOneService from '../../services/categories/listOneCategory.service';

const categoryListOneController = async (req: Request, res: Response) => {
	const { categoryId } = req.params;

	const properties = await categoryListOneService(categoryId);

	return res.status(200).send(properties);
};

export default categoryListOneController;
