import exp from 'express'
//create mini express applican
export const userApp=exp.Router()

let users=[];

userApp.get('/users',(req,res)=>{
//res.json({"message":"this is res frm get request handler"})
 res.status(200).json({message:"all users",payload:users})//message,payload
});

//post req handling route
userApp.post('/users',(req,res)=>{
    //res.json({"message":"this is res frm post request handler"})
    let newUser=req.body;
    users.push(newUser)
    res.status(201).json({message:"User created"})
});

//put req handling route
userApp.put('/users',(req,res)=>{
    //get modified user from client
    let modifiedUser=req.body;
    //find the user exists in array
    let userIndex=users.findIndex(userObj=>userObj.id===modifiedUser.id)
    //if user not found send the res as "user not found"
if(userIndex===-1){
   return res.status(404).json({message:"User not found"})
}
    //if user found, then modify the user
    users.splice(userIndex,1,modifiedUser)
    //send req as "user modified"
    res.status(200).json({message:"user modified"});

});

// read a user by id
userApp.get('/users/:id',(req,res)=>{

    console.log(req.params)
    //read id  from url parameter
    let UserId=Number(req.params.id)   //reterns an obj [id:100]
    //read user by this id
    let user=users.find(userObj=>userObj.id===UserId)
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    //send res
    res.status(200).json({message:"user",payload:user})
})

//delete req handling route
userApp.delete('/users/:id',(req,res)=>{
    //read id from url parameter 
    let userid=Number(req.params.id)
    //find the user with id in users arr
    let userIndex=users.findIndex(userObj=>userObj.id===userid)
    //if not found send "User not found"
    if(userIndex===-1){
        return res.status(404).json({message:"user not found"})
    }
    //if found delete the user
    users.splice(userIndex,1)
    //send res to client
    res.status(200).json({message:"User deleted"})
});
