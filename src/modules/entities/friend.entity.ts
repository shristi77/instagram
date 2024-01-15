import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Users } from './user.entity';

@Entity('friends')
export class Friends extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'user1Id' })
  user1: Users;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'user2Id' })
  user2: Users;
}