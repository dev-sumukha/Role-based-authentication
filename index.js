import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;


app.use('/auth', authRoutes);

mongoose.connect('mongodb+srv://sumukhasureban2002:KBAuXchCBl9Vsh6o@cluster0.23rg9.mongodb.net/')
.then(()=>{
    console.log('database onnected');
})
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
});