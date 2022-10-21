import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Property } from './properties.entity';

@Entity('category')
export class Category {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ unique: true })
	name: string;

	@OneToMany(() => Property, (property) => property.category)
	properties: Property[];
}
