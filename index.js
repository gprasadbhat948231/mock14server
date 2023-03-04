const express=require("express");
const {connection}=require("./config/db");
const {userRoute}=require("./route/user.route")
const cors=require("cors")
const {authentication}=require("./middlewares/authenticate")
const app=express();
app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use("/user",userRoute);
app.use(authentication);
app.listen(4500,async()=>{
    try{
        await connection;
        console.log("Connected to db")
    }
    catch(err){
        console.log(err)
    }
})