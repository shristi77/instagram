import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { friendDTO } from "./friend-create.dto";
import { FriendsService } from "./friend.service";
import { UserService } from "../users/users.service";

@Controller('friend')
export class FriendsController{
    constructor(
        private friendsService: FriendsService,
        private userService: UserService){}

    @Post('/add/request')
    async addFriend(@Body() bodyObj: friendDTO) {
        const user = await this.userService.getUserByIdWithRelation(bodyObj.user1Id, ['friends']);
        return await this.friendsService.addFriendship(bodyObj, user);
    }

    @Get('list/:id')
    async getFriendsList(@Param() params){
        console.log('asd:', params.id);
        return await this.friendsService.getFriendsList((params.id));
    }
}