import express from "express";
const collectionRouter = express.Router();

collectionRouter.get("/", (req, res) => {
    res.render("pages/collection", {
        pageTitle: "Collections",
        cssPath: "./styles/collection.css"
    });
})

export default collectionRouter;