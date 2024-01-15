import { IsNotEmpty, IsInt, Length } from "@nestjs/class-validator";

export class StoryDTO{
    @IsNotEmpty()
    @IsInt()
    userId: number;

    @IsNotEmpty()
    @Length(0,1000)
    story_image: string;
}