import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import entries from "src/modules/entities";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',

    host: process.env.DB_HOST,

    port: parseInt(process.env.DB_PORT),

    username: process.env.DB_USERNAME,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME,

    synchronize: true,//set to false for production so that we can not loose the data

    entities:entries,
    
    autoLoadEntities: true
    
}