import { Injectable, NotFoundException } from "@nestjs/common";
import console from "console";
import { Model } from "mongoose";
import { UpdateQuestionsDto } from "./dto/create-questions.dto";
import { Users } from "./user.schema";
import { QuestionRepository } from "./user.repository";

@Injectable()
export class QuestionService {
  constructor(private readonly questionRepository: QuestionRepository) { }

  async getQuestions(): Promise<Users[]> {
    return this.questionRepository.find({});
  }

  async update(id: number, postData: any): Promise<Users> {
    return this.questionRepository.findOneAndUpdate({ id }, postData);
  }

  async getId(id: number): Promise<Users> {
    return this.questionRepository.findOne({ '_id': id });
  }

  // async postNew(name: string, senha: string, data: string, email: string){
  //   return this.postNew(name, senha, data, email)
  // }
  async postNew(obj: any){
    return this.questionRepository.newinsert(obj)
  }


}
