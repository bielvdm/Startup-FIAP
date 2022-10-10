import { Injectable, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { QuestionDocument, Users } from "./user.schema";

@Injectable()
export class QuestionRepository {
  constructor(@InjectModel(Users.name) private userModel: Model<QuestionDocument>) { }

  async find(questionFilterQuery: FilterQuery<Users>): Promise<Users[]> {
    return this.userModel.find(questionFilterQuery)
  }

  async findOne(questionFilterQuery: FilterQuery<Users>) {
    return this.userModel.findOne(questionFilterQuery)
  }

  async findOneAndUpdate(questionFilterQuery: FilterQuery<Users>, question: Users): Promise<Users> {
    return this.userModel.findOneAndUpdate(questionFilterQuery, question, {
      new: true,
      upsert: true
    })
  }

  async newinsert(obj) {
    this.userModel.insertMany({name: obj.name, senha: obj.senha, datanasc: obj.datanasc, email: obj.email})
  }
}
