import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './config';
import { User } from './model/user.model';
import { Purse } from './model/purse.model';
import { PurseSavingService } from './purse-saving.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(Config.typeOrmConfig),
    TypeOrmModule.forFeature([
      User,
      Purse,
    ]),
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    PurseSavingService,
  ],
})
export class AppModule {
}
