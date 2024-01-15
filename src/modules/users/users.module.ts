import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersRepository } from "./user.repository";
// import { usersProviders } from "./user.providers";

@Module({
    controllers: [UserController],
    imports: [ TypeOrmModule.forFeature([UsersRepository]) ],
    providers: [UserService, UsersRepository],
})

export class UserModule {}