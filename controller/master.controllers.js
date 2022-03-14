const express = require('express')

const Master = require("../models/master.models")

const crudController = require("./crud.controllers")

const router = express.Router();

router.get("", async (req, res) => {
    try {
        const masters = await Master.find().populate({
            path: "userId"
        }).lean().exec()

        return res.status(200).send(masters)
    } catch (err) {
        return res.status(200).send({message: err.message})
    }
})