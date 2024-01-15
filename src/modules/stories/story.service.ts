import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StoryRepository } from "./story.repository";

@Injectable()
export class StoryService{
    constructor(@InjectRepository(StoryRepository) private storyRpository: StoryRepository) {}

    async addStory(bodyObj, user){
        const newStory = await this.storyRpository.save(bodyObj);
        user.stories = [ ...user.stories, newStory];
        return user.save();
    }
}
