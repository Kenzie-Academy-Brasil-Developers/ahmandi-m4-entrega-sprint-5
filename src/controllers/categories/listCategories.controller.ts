import { Request, Response } from 'express';
import { AppError } from '../../errors/appError';
import categoriesListService from '../../services/categories/listCategories.service';

const categoryListController = async (req: Request, res: Response) => {
	try {
		const categories = await categoriesListService();

		return res.status(200).send(categories);
	} catch (err) {
		if (err instanceof AppError) {
			return res.status(err.statusCode).send({
				error: err.name,
				message: err.message,
			});
		}
	}
};

export default categoryListController;
