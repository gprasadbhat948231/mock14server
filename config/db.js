const mongoose=require("mongoose")

const connection=mongoose.connect('mongodb+srv://guruprasad:guruprasad@cluster0.wjv8d0w.mongodb.net/bugfix?retryWrites=true&w=majority');

module.exports={connection}