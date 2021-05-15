const express=require('express'),
    app=express(),
    mongoose=require('mongoose')
    bodyparser=require('body-parser');
    require('dotenv').config()

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended: true}));

//MONGODB ATLAS CONNECTION

const connectionParams={
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true
}
mongoose.connect(process.env.DBURL,connectionParams)
.then( ()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log("NOT CONNECTED!!")
    console.log(err)
})
//MONGODB CONNECTION COMPLETED

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/view",(req,res)=>{
    res.render("view")
})

app.get("/request",(req,res)=>{
    res.render("request")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server Started!!")
})