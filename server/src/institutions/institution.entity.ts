import { Status } from 'src/common/enums/status.enum';
import Group from 'src/groups/group.entity';
import User from 'src/users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Institution {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Active,
  })
  public status: Status;

  @OneToMany(() => User, (user) => user.institution)
  public users: User[];

  @OneToMany(() => Group, (group: Group) => group.institution)
  public groups: Group[];

  @Column({ nullable: true })
  public photos: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
