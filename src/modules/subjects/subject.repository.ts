import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Subjects } from '../entities';


@Injectable() 
export class SubjectsRepository extends Repository<Subjects> {
  constructor(private dataSource: DataSource) {
    super(Subjects, dataSource.createEntityManager());
  }
}