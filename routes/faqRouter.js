import express from "express";
const faqRouter = express.Router();

faqRouter.get("/", (req, res) => {
    res.render("pages/faq", {
        pageTitle: "Faq",
    });
})

export default faqRouter;