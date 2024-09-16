import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectdb } from './db/connecDb.js';
import authRoutes from './routes/auth.route.js'
import cors from 'cors'
dotenv.config()


const app= express();
const PORT = process.env.PORT||5000;

app.use(cors({origin: "http://localhost:5173", Credential: true}));
// app.use("/", (req, res, next) => {
//   if (req.path === "/") {
//     res.send("hello world");
//   } else {
//     next();
//   }
// }); jus for testing purpose

app.use(express.json())// allows us to parese incoming requests with :req.body
app.use(cookieParser())// allow us to pare incoming cookies
app.use("/api/auth", authRoutes);



app.listen(PORT, ()=>{
  connectdb();
  console.log('server is running on port',PORT);
});