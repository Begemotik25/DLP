import Course from 'src/courses/course.entity';
import Institution from 'src/institutions/institution.entity';
import Task from 'src/tasks/task.entity';
import User from 'src/users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class UserHasTask {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column()
  public file: string;

  @Column()
  public mark: number;

  @OneToOne(() => Task)
  @JoinColumn()
  public task: Task;

  @OneToOne(() => User)
  @JoinColumn()
  public user: User;

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
