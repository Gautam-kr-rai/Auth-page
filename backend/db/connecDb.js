
import mongoose from 'mongoose'

export const connectdb = async ()=>{
   
  try{

    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log("database connected")
  }
  catch(error){
    console.log('error in connection mogo db', error.message)

    process.exit(1);

    // 1 is failure and 0 is success
  }
}