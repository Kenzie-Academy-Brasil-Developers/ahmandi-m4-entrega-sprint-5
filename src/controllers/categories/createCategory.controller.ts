import { Request, Response } from 'express';
import { AppError } from '../../errors/appError';
import categoryCreateService from '../../services/categories/createCategory.service';

const categoryCreateController = async (req: Request, res: Response) => {
	try {
		const category = await categoryCreateService(req.body);

		return res.status(201).send(category);
	} catch (err) {
		if (err instanceof AppError) {
			return res.status(err.statusCode).send({
				error: err.name,
				message: err.message,
			});
		}
	}
};

export default categoryCreateController;
