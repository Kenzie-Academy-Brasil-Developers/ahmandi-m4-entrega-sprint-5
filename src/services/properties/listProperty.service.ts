import AppDataSource from '../../data-source';
import { Property } from '../../entities/properties.entity';
import { IPropertyRequest } from '../../interfaces/properties';

const propertiesListService = async () => {
	const propertiesRepository = AppDataSource.getRepository(Property);

	const properties = await propertiesRepository.find();

	return properties;
};

export default propertiesListService;
