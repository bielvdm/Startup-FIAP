import { Body, CacheTTL, Controller, Get, Param, Patch, Post, UploadedFile, UseInterceptors, UseGuards, Delete, Put } from "@nestjs/common";
import { Users } from "./user.schema";
import { Express } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import { QuestionService } from "./user.service";
import { UpdateQuestionsDto } from "./dto/create-questions.dto";
import { AppService } from "src/app.service";
import { Cron } from "@nestjs/schedule";
import { on } from "events";

@Controller('data')
export class QuestionController {
  constructor(private readonly questionService: QuestionService, private readonly appService: AppService) { }

  @Get()
  async getQuestions(): Promise<Users[]> {
    return this.questionService.getQuestions();
  }

  @Post()
  async postNewUser(@Body() obj: any){
    return this.questionService.postNew(obj)
  }

}

