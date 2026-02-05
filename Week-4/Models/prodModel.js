import {Schema,model} from 'mongoose'

const prodSchema= new Schema({
    prodId:{
    type:Number,
    required: [true,"ProdId is required"],
   },
   prodName:{
    type:String,
    required:[true,"Product Name is required"],
    minLength:[4,"product length should be min 4"],
    maxLength:[9,"product length should not be above 9"]
   },
   price:{
    type:Number,
    required:[true,"Price is required"],
    min:[5000,"price should be above 5000"],
    max:[30000,"price should be less than 30000"]
   },
   
},
{
    strict:"throw", //throws the error if any new fields are created
    timestamps:true
})

//create prod Schema
export const ProductModel=model("product",prodSchema)