const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema
({
        
        First:String,
     Last:String,
     number:String,  
     Email:String, 
     location:String,
    
        
     




}
)
module.exports=mongoose.model('user',userSchema,'contactdata')