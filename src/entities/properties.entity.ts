import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToOne,
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from 'typeorm';
import { Address } from './addresses.entity';
import { Category } from './categories.entity';
import { Schedules } from './schedule.entity';

@Entity('property')
export class Property {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('boolean', { default: false })
	sold: boolean;

	@Column({
		type: 'decimal',
		precision: 12,
		scale: 2,
		default: 0,
		nullable: false,
	})
	value: number;

	@Column()
	size: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToOne(() => Address, {
		eager: true,
	})
	@JoinColumn()
	address: Address;

	@ManyToOne(() => Category, (category) => category.properties, {
		eager: true,
	})
	category: Category;

	@OneToMany(() => Schedules, (schedules) => schedules.properties)
	schedules: Schedules;
}
