import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Property } from './properties.entity';
import { User } from './user.entity';

@Entity('schedules')
export class Schedules {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	date: Date;

	@Column()
	hour: Date;

	@ManyToOne(() => Property, (property) => property.schedules, {
		eager: true,
	})
	properties: Property;

	@ManyToOne(() => User, (user) => user.schedules, {
		eager: true,
	})
	user: User;
}
