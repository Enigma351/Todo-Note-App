import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

import notesRoutes from './Routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

// middleware
app.use(cors({
  origin: "http://localhost:5173",
}))
app.use(express.json());
app.use(rateLimiter);

// app.use((req, _, next) => {
//   console.log(`Req method is ${req.method} and Req url is ${req.url}`);
//   next();
// });

app.use('/api/notes', notesRoutes);


connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
});

// mongodb+srv://senpartho15:<db_password>@cluster0.s3hkfob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
