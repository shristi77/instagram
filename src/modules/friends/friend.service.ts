import { ConflictException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { friendDTO } from "./friend-create.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { FriendsRepository } from "./friend.repository";
import { UsersRepository } from "../users/user.repository";

@Injectable()
export class FriendsService{

    constructor(@InjectRepository(FriendsRepository) private friendsRepository: FriendsRepository,
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository){}

    async addFriendship(bodyReq: friendDTO, user){
        //check users exist or not;
        const user1 = await this.usersRepository.findOneBy({ id: bodyReq.user1Id });
        const user2 = await this.usersRepository.findOneBy({ id: bodyReq.user2Id });
        if (!user1 || !user2) return { error: 'One or both users not found' };
        else if (user1 && user2 && (user1.id == user2.id)) return { error: 'User Ids should not be same' };

        //checking the relation between user & his friend
        const res = await this.friendsRepository.find({
            where: [
                { user1: {id: user1.id}, user2: {id: user2.id} },
                { user1: {id: user2.id}, user2: {id: user1.id} }
            ],
            relations: ['user1', 'user2']
        })
        if(res && res.length) {
            console.log(res);
            await this.friendsRepository.delete(res[0].id);
            return { error: 'Unfollowing this user now' };
        }
        const friendship = await this.friendsRepository.create({ user1: user1, user2: user2 });
        const newFriend = await this.friendsRepository.save(friendship); 
        // user.friends = [...user.friends, newFriend];
        // return user.save();
        return newFriend;
    }

    async getFriendsList(id){
        return await this.friendsRepository.find({
            where: [{ user1: {id} }, { user2: {id} }],
            relations: ['user1', 'user2']
        })
    }
}