import { IsNotEmpty, Length } from "@nestjs/class-validator";

export class SubjectCreateDTO{

    @IsNotEmpty({ message: 'Subject name is required!' })
    @Length(1, 255)
    subjectName: string;

    @IsNotEmpty({ message: 'Class name is required!' })
    subjectClassLevel: number;

    @IsNotEmpty({ message: 'Description is required!' })
    @Length(5, 5000)
    subjectDescription: string;

    @IsNotEmpty({ message: 'UserId is required' })
    userId: number;
}