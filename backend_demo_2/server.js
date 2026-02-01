import exp from 'express'
import {userApp} from './apis/userApi.js'
import { productApp } from './apis/productApi.js'
import {connect} from 'mongoose'
const app=exp()
//Assign port
const port=4000;
//body parser middleware
app.use(exp.json())
//if path starts with /user-api, forward req to userApp
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//connect to db server
async function connectDB(){
    //connect('mongodb://localhost:27017')
    //.then(()=>console.log("connected to db"))
    //.catch(() =>console.log("error in connecting to db",err));
    // since they're old we'r moving to asink and await
    try
    {
    await connect('mongodb://localhost:27017/anuragdb')
    console.log("DB connection sucess")
    }
    catch(err)
    {
    console.log("err in DB connection:",err)
    }
} //connect returns promise(asynchronous)

connectDB()

/*
function errorHandler(err,req,res,next){
    res.json({message:"error",reason:err})
}
app.use(errorHandler)
*/
app.use((err,req,res,next)=>{
    res.status(500).json({message:"Error",reason:err.message})
})

app.listen(port,()=>console.log("Server listening on port 4000..."))

