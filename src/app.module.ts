import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/users.module';
import { typeOrmConfig } from './config/typeorm.config';
import { SubjectModule } from './modules/subjects/subject.module';
import { FriendsModule } from './modules/friends/friend.module';
import { StoryModule } from './modules/stories/story.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    SubjectModule,
    FriendsModule,
    StoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
