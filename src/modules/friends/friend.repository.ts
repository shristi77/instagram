import { Injectable } from "@nestjs/common";
import { Repository, DataSource } from "typeorm";
import { Friends } from "../entities/friend.entity";

@Injectable() 
export class FriendsRepository extends Repository<Friends> {
  constructor(private dataSource: DataSource) {
    super(Friends, dataSource.createEntityManager());
  }
}