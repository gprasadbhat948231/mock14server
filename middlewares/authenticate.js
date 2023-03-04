const jwt=require("jsonwebtoken");

const authentication=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decoded=jwt.verify(token,"chandaguli")
        if(decoded){
            const userID=decoded.userID;
            req.body.userID=userID
            next()
        }
        else{
            res.send("You cannot go ahead without my permission")
        }
    }
    else{
        res.send("Modlu login agu")
    }
}
module.exports={authentication}