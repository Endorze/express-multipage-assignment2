import express from "express";
const collectionRouter = express.Router();

collectionRouter.get("/", (req, res) => {
    res.render("pages/collection");
})

export default collectionRouter;