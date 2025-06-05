import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps: true})

export class Address{

    @Prop({required: true})
    address1: string;

    @Prop({required: true})
    address2 : string

    @Prop ({required: true})
    city : string

    @Prop ({required: true})
    country: string

    @Prop({ required: true})
    state: string
    
}

const schema = SchemaFactory.createForClass(Address)

export const AddressSchema= schema;

