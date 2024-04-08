import  express  from "express";
import  Mongoose from "mongoose";
import  bodyparser from "body-parser";
import  dotenv  from "dotenv";
import route from "./Routes/user.route.js";



const app=express();
 
app.use(bodyparser.json())

dotenv.config();

const PORT = process.env.PORT || 5000;

const MONGOURL = process.env.MONGO_URL

Mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected successfully.");
    
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}!`);
  });
}).catch(error=>console.log(error))

app.use("/api/user",route)

  

