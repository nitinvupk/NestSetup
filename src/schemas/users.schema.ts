import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ACCOUNT_TYPE,ACCOUNT_STATUS } from "../constants/account.constants";
import { Address, AddressSchema } from "./common/address.schema";
import { Document } from 'mongoose';

// export const USER_MODEL = 'User';

export type UserDocument = User & Document;


@Schema({timestamps: true})
export class User{
   @Prop({required: true})
   name: string;

   @Prop({required: true})
   email: string

   @Prop({required: true, select: false})
   password: string

   @Prop({ enum: ["Approval_pending","Avctive", "Inactive", "deleted"],
    default: "Active"
   })
   status?: string

   @Prop({
    type: String,
     enum: Object.keys(ACCOUNT_STATUS),
    default: ACCOUNT_STATUS.ACTIVE
   })
   statuss?: ACCOUNT_STATUS


   @Prop({ 
    type: String,
     enum: Object.keys(ACCOUNT_TYPE),
    inmutable: true,
    required: true
   })
   accountType: ACCOUNT_TYPE
  
   @Prop({ type: AddressSchema, required: true})
   address:  Address;

//    @Prop ( 
//     raw({
//         reference: {type: String},
//         beta: {type: Boolean}
//     })
//    )

//    metadata: Record<string, any> | any;

}
// export type UserDocument = User & Document;


export const UserSchema = SchemaFactory.createForClass(User)

// export const USER_MODEL = User.name