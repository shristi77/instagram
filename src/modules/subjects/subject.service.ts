import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SubjectsRepository } from "./subject.repository";

@Injectable()
export class subjectService{
    constructor(@InjectRepository(SubjectsRepository) private subjectsRepository: SubjectsRepository){}

    async addSubject(subjectBody, user){
        try{
            const newSubject = await this.subjectsRepository.save(subjectBody);
            user.subjects = [ ...user.subjects, newSubject];
            return user.save();
        }catch(err){
            return { message: err.driverError && err.driverError.detail? err.driverError.detail: 'Something went wrong!!' }
        }
    }

    async getSubjects(){
        return await this.subjectsRepository.find();
    }

}