const mongoose= require ("mongoose");
require("dotenv").config(); 
const uri = process.env.MONGO_URI;
if (!uri) {
    console.error('MongoDB connection URI is missing!');
   
  }

mongoose.connect(uri, {
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
   
})
.then(() => console.log("MongoDB Atlas connected successfully"))
.catch((error) => console.error("mongoDBAtlus connection error : ", error));

// mongoose.connect("mongodb://localhost:27017/course-api", {
// }).then(()=>{
//     console.log("connection successfull");
// }).catch((e)=>{
//     console.log("no connection");
// })