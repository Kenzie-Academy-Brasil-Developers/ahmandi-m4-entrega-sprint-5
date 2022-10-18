import { User } from '../../entities/user.entity';
import AppDataSource from '../../data-source';
import { IUser } from '../../interfaces/users';

const userListService = async (): Promise<IUser[]> => {
	const userRepository = AppDataSource.getRepository(User);

	const users: IUser[] = await userRepository.find();

	users.map((user) => {
		delete user.password;
		return user;
	});

	return users;
};

export default userListService;
