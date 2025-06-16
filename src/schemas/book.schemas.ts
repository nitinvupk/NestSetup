import { Schema, SchemaFactory } from "@nestjs/mongoose";
 import { Prop } from "@nestjs/mongoose";

export enum Category {
    ADVENTURE= 'Adventure',
    CLASSICS= 'Classics',
    CRIME= 'Crime',
    FANTASY= 'Fantasy'
}

@Schema({timestamps: true})

export class Book{

    @Prop({require: true})
    title: string

    @Prop()
    description : string

    @Prop()
    author: string

    @Prop()
    price : number

    @Prop()
    category : Category
}

export const BookSchema=  SchemaFactory.createForClass(Book)