import { Module } from "@nestjs/common";
import { SubjectController } from "./subject.controller";
import { subjectService } from "./subject.service";
import { SubjectsRepository } from "./subject.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "../users/users.service";
import { UsersRepository } from "../users/user.repository";

@Module({
    controllers: [SubjectController],
    imports: [TypeOrmModule.forFeature([SubjectsRepository])],
    providers: [
        subjectService, 
        SubjectsRepository, 
        UserService, 
        UsersRepository
    ]
})

export class SubjectModule{}