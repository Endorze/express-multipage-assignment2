import express from "express";
import dotenv from "dotenv";
import collectionRouter from "./routes/collectionRouter.js";
import homeRouter from "./routes/homeRouter.js";
import contactRouter from "./routes/contactRouter.js";
import summonRouter from "./routes/summonRouter.js";
import faqRouter from "./routes/faqRouter.js";
import path from "path"

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/home", {
        pageTitle: "Home",
    })
});

app.use("/", homeRouter);
app.use("/collection", collectionRouter);
app.use("/contact", contactRouter);
app.use("/summon", summonRouter);
app.use("/faq", faqRouter);


app.listen(port, () => console.log(`Server running on port ${port}`));