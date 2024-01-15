import { IsNotEmpty, IsInt } from "@nestjs/class-validator";

export class friendDTO{
    @IsNotEmpty()
    @IsInt()
    user1Id: number;

    @IsNotEmpty()
    @IsInt()
    user2Id: number;
}