import { User } from '../../entities/user.entity';
import AppDataSource from '../../data-source';

const userDeleteSelfService = async (id: string): Promise<User> => {
	const userRepository = AppDataSource.getRepository(User);

	const account = await userRepository.findOneBy({ id });

	await userRepository.update(account!.id, {
		isActive: (account!.isActive = false),
	});

	return account!;
};

export default userDeleteSelfService;
