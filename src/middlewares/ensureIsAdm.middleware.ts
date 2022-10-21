import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';

const ensureisAdm = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { isAdm } = req.user;

		if (!isAdm) {
			return res.status(403).json({ message: 'User has no permission' });
		}

		return next();
	} catch (error) {
		if (error instanceof Error)
			return res.status(403).json({ message: error.message });
	}
};

export default ensureisAdm;
