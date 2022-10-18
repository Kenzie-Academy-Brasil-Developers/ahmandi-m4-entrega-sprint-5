import { Request, Response } from 'express';
import userUpdateService from '../../services/user/updateUser.service';

const userUpdateController = async (req: Request, res: Response) => {
	try {
		const { userID, isAdm } = req.user;
		const data = req.body;
		const { id } = req.params;

		const user = await userUpdateService(data, id, isAdm, userID);

		return res.status(200).json({ message: 'Profile updated' });
	} catch (err) {
		if (err instanceof Error) {
			return res.status(401).send({
				error: err.name,
				message: err.message,
			});
		}
	}
};
export default userUpdateController;
