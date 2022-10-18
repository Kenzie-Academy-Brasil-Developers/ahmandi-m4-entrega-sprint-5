import { Request, Response } from 'express';
import userCreateService from '../../services/user/createUser.service';

const userCreateController = async (req: Request, res: Response) => {
	try {
		// const userReq = req.body;

		const user = await userCreateService(req.body);

		return res.status(201).send(user);
	} catch (err) {
		if (err instanceof Error) {
			return res.status(400).send({
				error: err.name,
				message: err.message,
			});
		}
	}
};

export default userCreateController;
