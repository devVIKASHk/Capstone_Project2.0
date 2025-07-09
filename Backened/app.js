import express from 'express';
import cors from 'cors';


const app= express();

app.use(cors({
    origin:`http://10.29.176.110:5173`,
    methods:'GET,PUT,PATCH,DELETE,POST,HEAD',
    credentials:true


}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send('Welcome to the Fitness Challenges Backend');
})
app.post('/api/user/login',(req,res)=>{
    const loginInfo = req.body;
    console.log(loginInfo)
    res.send({message:'Invalid Credentials'})
})


app.listen(4000,'0.0.0.0',(error)=>{
    if (error){
        console.error('Error starting server:', error);
    }else{
        console.log(`Server is running at http://0.0.0.0:4000`);
    }
})