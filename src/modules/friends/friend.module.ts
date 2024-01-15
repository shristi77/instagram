import { Module } from "@nestjs/common";
import { FriendsController } from "./friend.controller";
import { FriendsService } from "./friend.service";
import { FriendsRepository } from "./friend.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersRepository } from "../users/user.repository";
import { UserService } from "../users/users.service";

@Module({
    controllers: [FriendsController],
    imports: [TypeOrmModule.forFeature([FriendsRepository]) ],
    providers: [FriendsService, FriendsRepository, UserService, UsersRepository]
})
export class FriendsModule{}