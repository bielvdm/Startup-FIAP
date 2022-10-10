import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { Questions, QuestionsSchema } from './database.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'database', schema: QuestionsSchema }])],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule { }
