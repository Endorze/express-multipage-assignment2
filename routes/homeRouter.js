import express from "express";
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
    res.render("pages/homepage");
})

export default homeRouter;