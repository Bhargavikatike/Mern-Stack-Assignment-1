import exp from 'express'
import {UserModel} from '../Models/userModel.js'
//USER API router
export const userApp=exp.Router()

//read user
userApp.get('/users',async(req,res)=>{
    //read users from DB
    let userObj=await UserModel.find()
    //send res
    res.status(200).json({message:"users",payload:userObj})
})

userApp.get('/users/:id',async(req,res)=>{
    let objId=req.params.id
    let userObj=await UserModel.findById(objId)
    res.status(200).json({message:"user",payload: userObj})
})
//cretae User
userApp.post('/users',async(req,res)=>{
    //get newuser from req
    let newUser=req.body;
    //check newUser before processing
    //console.log(newUser)

    //create new user doucument
    let newUserDoc=new UserModel(newUser)
    //console.log(newUserDoc)

    //save in db
    await newUserDoc.save()
    res.status(201).json({message:"User Created"})
})

//update User
userApp.put('/users/:id',async(req,res)=>{
    //get obj id from prams
    let objId=req.params.id;
    //get modified use rfrom req
    let modifiedUser=req.body 
    //make update
    let latestUser = await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true,runValidators:true})
    //send res
    res.status(200).json({message:"user modified",payload:latestUser})
})
//Delete User
userApp.delete('/users/:id',async(req,res)=>{
   //get ObjectId from url params
   let objId=req.params.id;
   //delete user by Id
   let deleteUser=await UserModel.findByIdAndDelete(objId)
   res.status(200).json({message:"User deleted",payload:deleteUser})
})