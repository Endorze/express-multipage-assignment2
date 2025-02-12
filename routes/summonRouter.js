import express from "express";
const summonRouter = express.Router();

summonRouter.get("/", (req, res) => {
    res.render("pages/summon");
})

export default summonRouter;