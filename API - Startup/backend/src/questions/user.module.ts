import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppService } from "src/app.service";
import { MailService } from "src/mail/mail.service";
import { Users, QuestionsSchema } from "./user.schema";
import { QuestionController } from "./user.controller";
import { QuestionRepository } from "./user.repository";
import { QuestionService } from "./user.service";

@Module({
  imports: [ MongooseModule.forFeature([{ name: Users.name, schema: QuestionsSchema }])],
  providers: [QuestionService, QuestionRepository, AppService, MailService],
  controllers: [QuestionController]
})
export class QuestionModule { }
