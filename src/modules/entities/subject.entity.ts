import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne
  } from 'typeorm';
import { Users } from './user.entity';

@Entity('subjects')
export class Subjects extends BaseEntity{

    @PrimaryGeneratedColumn({
        comment: "The subject's unique identifier"
    })
    subjectId: number;


    @Column({ type: 'varchar', unique: false })
    subjectName: string;

    @Column({ type: 'integer', unique: false })
    subjectClassLevel: number;

    @Column({ type: 'text', unique: false })
    subjectDescription: string;

    @ManyToOne(()=> Users, user=> user.subjects)
    user: Users

}