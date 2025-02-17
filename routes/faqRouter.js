import express from "express";
const faqRouter = express.Router();

faqRouter.get("/", (req, res) => {
    res.render("pages/faq", {
        pageTitle: "Faq",
        bodyClass: "faq-body",
        cssPath: "./styles/faq.css",
        templateDiv: "center-content"
    });
})

export default faqRouter;