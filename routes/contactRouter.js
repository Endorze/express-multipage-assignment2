import express from "express";
const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
    res.render("pages/contact");
})

export default contactRouter;