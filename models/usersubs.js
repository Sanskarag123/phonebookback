const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema
(
    {admin:String,
        username:String,
        password:String,
        name:String
        



    }
)
module.exports=mongoose.model('user2',userSchema,'usersubs')