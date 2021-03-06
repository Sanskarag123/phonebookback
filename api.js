const express=require('express')
const router=express.Router();
const User1=require('./models/userdata')
const mongoose=require('mongoose')
const User=require('./models/contactdata')
const User2=require('./models/usersubs')
const db='mongodb+srv://san:1234@cluster0-nmxs5.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(db,{useNewUrlParser: true},err=>{
    if(err) 
{
    console.log('cannot connect')
}
else
{
    console.log('connected1');
}
});
router.get('/',(req,res)=>{
    res.send('connected to api')
});
router.post('/contact',(req,res)=>
{   const data=req.body
    const user=new User(data)
    user.save((error,data1)=>
    {
        if(error)
        res.status(401).send('error')
        else
        res.status(200).send(data1)
        console.log('entered')
    })
})
router.post('/delete',(req,res)=>
{   const data=req.body
    const user=new User(data)
    
    User.remove({First:data.First},{justOne: true},(error,data1)=>
    {
        if(error)
        res.status(401).send('error')
        else
        res.status(200).send(data1)
        console.log('deleted')
    })
    
})
router.post('/deletegrp',(req,res)=>
{   const data=req.body
    const user=new User1(data)
    User1.remove({groupname:data.groupname},{justOne: true},(error,data1)=>
    {
        if(error)
        res.status(401).send('error')
        else
        res.status(200).send(data1)
        console.log('deleted group')
    })
})
router.post('/deletegc',(req,res)=>
{   const data=req.body
    const user=new User1(data)
    User1.update({},{$pull:{contact:data}},(error,data1)=>
    {
        if(error)
        res.status(401).send('error')
        else
        res.status(200).send(data1)
        console.log('deleted')
    })
})
router.post('/update',(req,res)=>
{   const data=req.body
    const user=new User(data)
    User.update({_id:data.id},{Last:data.Last,number:data.number,Email:data.email,location:data.location},(error,data1)=>
    {
        if(error)
        {
        res.status(401).send('error')
        console.log('not updated')
        }
        else
        res.status(200).send(data1)
        console.log('updated')
    })
})
router.get('/retrieve',(req,res)=>
{   const data=req.body
    const user=new User(data)
    User.find((error,data1)=>
    {
        if(error)
        res.status(401).send('error')
        else
        res.status(200).send(data1)
        console.log('entered')
    })
})
router.get('/retrievegroup',(req,res)=>
{   const data=req.body
    const user=new User1(data)
    User1.find((error,data1)=>
    {
        if(error)
        res.status(401).send('error')
        else
        res.status(200).send(data1)
        console.log('group')
    })
})

router.post('/createg',(req,res)=>{
    const data1=req.body
    const user=new User1(data1)
    user.save((error,data)=>
    {
if(error)
{
    console.log("error ");
}else
{console.log("group created");
    res.status(200).send(data);
}
    })

})
router.post('/addtogrp',(req,res)=>{
    const data1=req.body
    const user=new User1(data1)
    User1.update({groupname:data1.groupname},{$push:{contact:data1.contact}},(error,data)=>
    {
if(error)
{
    console.log("error ");
}else
{console.log("group updated");
    res.status(200).send(data);
}
    })

})

module.exports=router
