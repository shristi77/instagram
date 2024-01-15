import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./users.service";
import { UserCreateDTO } from "./user-create.dto";

@Controller('user')

export class UserController{
    constructor(private usersService: UserService){};

    @Post('add')
    async addUser(@Body() userData: UserCreateDTO){
       return await this.usersService.createUser(userData)
    }

    @Get(':id')
    async getUserById(@Param() params){
        return await this.usersService.getUserByIdWithRelation(Number(params.id), []);
    }

    @Get('relations/:id')
    async getUserByIdWithRelations(@Param() params, @Query() queryParams){
        console.log(queryParams)
        return await this.usersService.getUserByIdWithRelation(Number(params.id), JSON.parse(queryParams.relations));
    }

    @Get('list/:isRelation')
    async getUsers(@Param() paramData){
        return await this.usersService.getAllUsers(paramData.isRelation);
    }

    @Delete('delete/:colName/:colVal')
    async deleteUserById(@Param() paramData){
        return await this.usersService.deleteUserById(paramData.colName, paramData.colVal);
    }
}