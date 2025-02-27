import express from "express";
import characterList from "../data/collection.js";

const collectionRouter = express.Router();

collectionRouter.get("/", (req, res) => {
    res.render("pages/collection", {
        pageTitle: "Collections",
        cssPath: "/styles/collection.css",
        characters: characterList,
        hero: null,
    });
});

collectionRouter.get("/:heroName", (req, res) => {
    const { heroName } = req.params;
    const hero = characterList.find(h => h.heroName.toLowerCase() === heroName.toLowerCase());

    if (!hero) {
        return res.status(404).send("Hero not found");
    }

    res.render("pages/collection", {
        pageTitle: "Collections",
        cssPath: "/styles/collection.css",
        characters: characterList, 
        hero,
    });
});

export default collectionRouter;
