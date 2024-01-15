import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    ManyToMany,
    JoinTable,
    CreateDateColumn,
    UpdateDateColumn
  } from 'typeorm';
import { Subjects } from './subject.entity';
import { Friends } from './friend.entity';
import { Stories } from './story.entity';

@Entity('users')
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn({
        comment: "The user's unique identifier"
    })
    id: number;


    @Column({ type: 'varchar', unique: true })
    username: string;

    @Column({ type: 'varchar' })
    fullname: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'text' })
    profile_picture: string;

    @Column({ type: 'varchar' })
    bio: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;

    @ManyToMany(() => Friends, friend => friend.user1)
    @JoinTable()
    friends: Friends[];

    @OneToMany(()=> Stories, story => story.user)
    stories: Stories[];

    @OneToMany(()=> Subjects, subject => subject.user)
    subjects: Subjects[];

}