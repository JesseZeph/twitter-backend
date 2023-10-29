import express from "express";
import { authenticateToken } from "./middlewares/middleware";

import userRoutes from "./routes/userRoutes";
import tweetRoutes from "./routes/tweetRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();
app.use(express.json());
app.use("/user", authenticateToken, userRoutes);
app.use("/tweet",authenticateToken, tweetRoutes);
app.use("/auth", authRoutes);



app.get("/", (req, res) => {
    res.send("Hello")
});




app.listen(3000, () => {
    console.log('Server ready at locathost:3000')
})