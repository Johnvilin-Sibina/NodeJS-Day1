//importing
import express from "express";


//initializing
const app = express();
const PORT = 4000;


//middleware
app.use(express.json());

//routes
app.get('/',(req,res)=>{
    // res.status(200).json({message:"Hello"});
    res.status(200).send("Hello All!")
})

//running the port
app.listen(PORT,()=>{
    console.log(`App is listening in port ${PORT}`);
});