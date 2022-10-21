import { Request, Response } from 'express';
import { AppError } from '../../errors/appError';
import propertyCreateService from '../../services/properties/createProperty.service';

const propertyCreateController = async (req: Request, res: Response) => {
	try {
		const data = req.body;
		const property = await propertyCreateService(data, req.body);

		return res.status(201).send(property);
	} catch (error) {
		if (error instanceof AppError) {
			return res.status(error.statusCode).send({
				error: error.name,
				message: error.message,
			});
		}
	}
};

export default propertyCreateController;
