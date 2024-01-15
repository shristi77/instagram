import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { subjectService } from "./subject.service";
import { SubjectCreateDTO } from "./subject-create.dto";
import { UserService } from "../users/users.service";

@Controller('/subject')
export class SubjectController{

    constructor(
        private userService: UserService,
        private subjectService: subjectService){}

    @Post('/add')
    async addSubject(@Body() bodyReq: SubjectCreateDTO){   
        const user = await this.userService.getUserByIdWithRelation(bodyReq.userId, ['subjects']);
        return await this.subjectService.addSubject(bodyReq, user);
    }
}