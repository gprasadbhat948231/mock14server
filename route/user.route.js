const express=require("express");
const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken");
const {UserModel}=require("../model/user.model");

const userRoute=express.Router()

userRoute.post("/register",async(req,res)=>{
    const {email,password}=req.body;
    try{
        bcrypt.hash(password,8,async(err,password)=>{
            if(err){
                console.log(err)
            }
            else{
                const user=new UserModel({email,password});
                await user.save()
                res.send("Registration Successful")
            }
        })
    }
    catch(err){
        console.log("error while registering",err)
    }

})

userRoute.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                const token=jwt.sign({userID:user[0]._id},"chandaguli")
                res.send({"token":token})
            })
        }
        else {
            console.log("Wrong credentials")
        }
    }catch(err){
        console.log("err while login")
    }
})
module.exports={userRoute}