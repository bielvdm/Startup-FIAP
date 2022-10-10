import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type QuestionDocument = Users & Document;

//By default Nest will create the collection (in this case Facilities) but if we want we can override this behave by passing inside the Schema the name of the collection to be populated
@Schema() //@Schema({collection: 'name')
export class Users {
 
  @Prop()
  name: string

  @Prop()
  datanasc: string

  @Prop()
  email: string

  @Prop()
  senha: string

}

export const QuestionsSchema = SchemaFactory.createForClass(Users)
