import { IsNotEmpty, Length } from "@nestjs/class-validator";

export class UserCreateDTO{

    @IsNotEmpty({ message: 'username is required!' })
    @Length(3, 255)
    username: string;

    @IsNotEmpty({ message: 'full name is required!' })
    @Length(1, 255)
    fullname: string;

    @Length(0,1000)
    profile_picture: string;

    @IsNotEmpty({ message: 'bio is required!' })
    @Length(5, 300)
    bio: string;

    @IsNotEmpty({ message: 'password is required!' })
    @Length(5, 10)
    password: string;
}