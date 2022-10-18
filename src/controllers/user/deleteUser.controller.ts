import { Request, Response } from 'express';
import userDeleteSelfService from '../../services/user/deleteUser.service';

const userDeleteSelfController = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const user = await userDeleteSelfService(id);

		return res.status(204).json({ message: 'User deleted successfully' });
	} catch (err) {
		if (err instanceof Error) {
			return res.status(400).send({
				error: err.name,
				message: { message: err.message },
			});
		}
	}
};

export default userDeleteSelfController;
