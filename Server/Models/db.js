import mongoose from "mongoose";

const mongo_url = process.env.MONGO_URI || 'mongodb+srv://businesshandle618:krishnamongodb123@clusterkrishna.pnhx8.mongodb.net/auth-btp-db?retryWrites=true&w=majority&appName=ClusterKrishna';

mongoose.connect(mongo_url)
    .then(()=>{
        console.log('MongoDB Connected...');
    }).catch((err)=>{
        console.log('MongoDB Connecion Error: ', err);
    })