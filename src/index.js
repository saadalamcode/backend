const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const userRoutes = require("./routes/user.route");
const postRoutes = require("./routes/post.route");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});