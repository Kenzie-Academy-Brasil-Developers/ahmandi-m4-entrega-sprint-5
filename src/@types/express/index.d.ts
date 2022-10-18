import * as express from 'express';

declare global {
	namespace Express {
		interface Request {
			user: {
				userID: string;
				isAdm: boolean;
			};
		}
	}
}
