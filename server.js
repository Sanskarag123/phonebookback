const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const api=require('./api')
app.use(cors());
app.use(bodyParser.json())

app.use('/api',api);




app.get('/',function(req,res)
{
    res.send('connected')
})
var port=3000
app.listen(process.env.PORT||port,()=>
{
    console.log(`server running on port ${port}`)
})