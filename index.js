import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/home", {

    })
});

app.listen(port, () => console.log(`Server running on port ${port}`));