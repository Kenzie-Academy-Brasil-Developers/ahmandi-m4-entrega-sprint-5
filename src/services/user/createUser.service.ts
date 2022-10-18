import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';
import { IUserRequest } from '../../interfaces/users';
import bcrypt from 'bcrypt';

const userCreateService = async (userReq: IUserRequest) => {
	const userRepository = AppDataSource.getRepository(User);
	const users = await userRepository.find();
	const emailAlreadyExists = users.find((user) => user.email === userReq.email);

	if (emailAlreadyExists) {
		throw new Error('Email already exists');
	}

	const user = userRepository.create({
		name: userReq.name,
		email: userReq.email,
		password: bcrypt.hashSync(userReq.password, 10),
		isAdm: userReq.isAdm,
		isActive: true,
	});

	await userRepository.save(user);

	const { password, ...isUser } = user;

	users.push(user);

	return isUser;
};

export default userCreateService;
