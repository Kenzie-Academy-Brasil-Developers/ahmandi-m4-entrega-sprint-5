import AppDataSource from '../../data-source';
import { Property } from '../../entities/properties.entity';
import { IAddressRequest, IPropertyRequest } from '../../interfaces/properties';
import { Address } from '../../entities/addresses.entity';
import { Category } from '../../entities/categories.entity';
import { AppError } from '../../errors/appError';

const propertyCreateService = async (
	data: IAddressRequest,
	propertyReq: IPropertyRequest
) => {
	const propertyRepository = AppDataSource.getRepository(Property);
	const addressRepository = AppDataSource.getRepository(Address);
	const categoryRepository = AppDataSource.getRepository(Category);

	const category = await categoryRepository.findOneBy({
		id: propertyReq.categoryId,
	});

	if (!category) {
		throw new AppError('Category not found', 404);
	}

	const propertyAlreadyExists = await addressRepository.findOneBy({
		zipCode: propertyReq.address.zipCode,
		number: propertyReq.address.number,
	});

	if (propertyAlreadyExists) {
		throw new AppError('Property already exists', 400);
	}

	const address = addressRepository.create({
		district: propertyReq.address.district,
		zipCode: propertyReq.address.zipCode,
		number: propertyReq.address.number,
		city: propertyReq.address.city,
		state: propertyReq.address.state,
	});

	if (address.zipCode.length !== 8) {
		throw new AppError('Invalid ZipCode', 400);
	}

	await addressRepository.save(address);

	const property = propertyRepository.create({
		value: propertyReq.value,
		size: propertyReq.size,
		address: address,
		category: category,
	});

	await propertyRepository.save(property);

	return property;
};

export default propertyCreateService;
