import { Body, Controller, Post } from "@nestjs/common";
import { StoryDTO } from "./story-create.dto";
import { StoryService } from "./story.service";
import { UserService } from "../users/users.service";

@Controller('story')
export class StoryController{

    constructor(private storyService: StoryService, private userService: UserService){}

    @Post('add')
    async addStory(@Body() body: StoryDTO){
        const user = await this.userService.getUserByIdWithRelation(body.userId, ['stories']);
        return await this.storyService.addStory(body, user);
    }
}