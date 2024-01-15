import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Stories } from '../entities';


@Injectable() 
export class StoryRepository extends Repository<Stories> {
  constructor(private dataSource: DataSource) {
    super(Stories, dataSource.createEntityManager());
  }
}