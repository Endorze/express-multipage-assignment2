import express from "express";
const summonRouter = express.Router();

summonRouter.get("/", (req, res) => {
    res.render("pages/summon", {
        pageTitle: "Summon",
        cssPath: "./styles/summon.css",
    });
})

export default summonRouter;