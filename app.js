const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRoutes=require("./controllers/userRouter")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://fahmida123:fahmida123@cluster0.qw5qvsl.mongodb.net/userDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/user",userRoutes)

app.listen(3009,()=>{
    console.log("server running")
})