import { Module } from "@nestjs/common";
import { StoryController } from "./story.controller";
import { StoryService } from "./story.service";
import { StoryRepository } from "./story.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "../users/users.service";
import { UsersRepository } from "../users/user.repository";

@Module({
    controllers: [
        StoryController
    ],
    imports: [TypeOrmModule.forFeature([StoryRepository])],
    providers: [StoryService, StoryRepository, UserService, UsersRepository]
})
export class StoryModule{}