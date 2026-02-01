import {Schema,model} from 'mongoose'

//create user schema
const userSchema= new Schema({
   username:{
    type:String,
    required: [true,"Usename is required"],
    minLength:[4,"Min Length should be 4"],
    maxLength:[6,"Max Length exceeded"]
   },
   password:{
    type:String,
    required:[true,"Password is required"],
   },
   age:{
    type:Number,
    required:[true,"Age is required"],
    min:[18,"Age should be above 18"],
    max:[25,"Age should be less than 25"]
   }
},{
    strict:"throw", //throws the error if any new fields are created
    timestamps:true
})



//cretae user model to that schema
export const UserModel=model("user",userSchema)
