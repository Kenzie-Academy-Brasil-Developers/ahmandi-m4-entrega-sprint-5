import { Request, Response } from 'express';
import { AppError } from '../../errors/appError';
import propertiesListService from '../../services/properties/listProperty.service';

const propertiesListController = async (req: Request, res: Response) => {
	try {
		const properties = await propertiesListService();

		return res.status(200).send(properties);
	} catch (err) {
		if (err instanceof AppError) {
			return res.status(err.statusCode).send({
				error: err.name,
				message: err.message,
			});
		}
	}
};

export default propertiesListController;
