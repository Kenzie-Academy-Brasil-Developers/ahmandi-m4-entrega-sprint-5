import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import AppDataSource from '../data-source';
import { User } from '../entities/user.entity';

const invalidIDMiddleWare = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;

	const userRepository = AppDataSource.getRepository(User);

	const account = await userRepository.findOneBy({ id: id });

	if (!account) {
		return res.status(404).send({
			message: { message: 'User not found' },
		});
	}
	return next();
};

export default invalidIDMiddleWare;
