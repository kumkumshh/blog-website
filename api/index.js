import express from 'express';
import cors from 'cors';
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

// Use CORS
app.use(cors({ origin: 'http://localhost:5173' })); // Allow frontend origin

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
    console.log(`connected`);
});
