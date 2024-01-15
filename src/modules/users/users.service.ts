import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersRepository } from "./user.repository";
import * as moment from "moment";

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(UsersRepository) private usersRepository: UsersRepository
    ) {}

    async getAllUsers(isRelation){
        if (isRelation == 'yes') {
            const usersWithStories = await this.usersRepository
                .createQueryBuilder('users')
                .leftJoinAndSelect('users.stories', 'story')
                .getMany();
            
            const result = usersWithStories.map(user => {
                user.stories = user.stories.filter(story => {
                    return moment(story.updatedAt).add(1, 'day').valueOf()> moment().valueOf()
                });
                return user;
            });
            return result;
        } else {
        return this.usersRepository.find();
        }
    }

    async getUserByIdWithRelation(id, relations){

        const userWithStories = await this.usersRepository
            .createQueryBuilder('users')
            .leftJoinAndSelect('users.stories', 'story')
            .where('users.id = :id', { id })
            .getOne();
        console.log('user val: ', userWithStories);
        if (userWithStories && Object.keys(userWithStories).length) {
            userWithStories.stories = userWithStories.stories.filter(story => {
                return moment(story.updatedAt).add(1, 'day').valueOf() > moment().valueOf();
            });
            return userWithStories;
        }else return { message: "something went wrong" };
    }

    async createUser(body) {
        try{
            await this.usersRepository.save(body);
            return { status: 'success' };
        }catch(err){
            return { status: 'error', message: err.driverError && err.driverError.detail? [err.driverError.detail]: ['Something went wrong!!'] }
        }
        
    }

    async deleteUserById(colName, colval) {
        
        return await this.usersRepository.createQueryBuilder('users').delete().where('bio = :bio', { bio: colval }).execute();

    }



}