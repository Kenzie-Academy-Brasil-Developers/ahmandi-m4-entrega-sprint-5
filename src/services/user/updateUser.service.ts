import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';
import bcrypt from 'bcrypt';
import { IUserUpdate } from '../../interfaces/users';

const userUpdateService = async (
	data: IUserUpdate,
	id: string,
	isAdm: boolean,
	tokenID: string
): Promise<User> => {
	const userRepository = AppDataSource.getRepository(User);

	const users = await userRepository.findOneBy({ id });

	if (!isAdm) {
		if (tokenID !== id) {
			throw new Error('User has permissions');
		}
	}

	if (!users) {
		throw new Error('User not found');
	}

	const keys = Object.keys(data);

	if (
		keys.includes('isAdm') ||
		keys.includes('isActive') ||
		keys.includes('id')
	) {
		throw new Error('Not allowed');
	}

	const newPassword = bcrypt.hashSync(users.password, 10);
	await userRepository.update(users!.id, {
		name: data.name ? data.name : users.name,
		password: data.password ? data.password : newPassword,
		email: data.email ? data.email : users.email,
	});

	return users;
};

export default userUpdateService;
