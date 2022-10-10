import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type QuestionDocument = Questions & Document;

//By default Nest will create the collection (in this case Facilities) but if we want we can override this behave by passing inside the Schema the name of the collection to be populated
@Schema() //@Schema({collection: 'name')
export class Questions {
  
  @Prop()
  score: number;

  @Prop()
  question: string;

}

export const QuestionsSchema = SchemaFactory.createForClass(Questions)
