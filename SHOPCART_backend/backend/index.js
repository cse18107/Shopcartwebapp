const app = require('./app');
const dotenv = require('dotenv');
const  connectDatabase  = require('./config/database');
const cloudinary = require('cloudinary');


// Handling Uncaught Exception
process.on("uncaughtException",(error) =>{
    console.log('Error:'+error.message);
    console.log(`Shutting down the server due to  Uncaught Exception`);
    process.exit(1);
})


// Config

app.get('/',(req,res)=>{
    res.json({message:'working'})
})

dotenv.config({path:'./config/config.env'});

// Connecting to database
connectDatabase();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const server = app.listen(process.env.PORT||4000,()=>{
    console.log(`Server is working on port number ${process.env.PORT}`);
});


// Unhandled Promise Rejection
process.on("unhandledRejection",error=>{
    console.log(`Error: ${error.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    });
});
