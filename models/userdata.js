const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema
(
    {groupname:String,
        contact:[]



    }
)
module.exports=mongoose.model('user1',userSchema,'userdata')