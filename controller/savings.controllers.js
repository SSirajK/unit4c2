const express = require("express")

const crudController = require("./crud.controllers")

const Savings = require("../models/savings.models")

const router = express.Router();

router.get("", async (req, res) => {
    try {
        const saving = await Savings.find().lean().exec()

        return res.status(200).send(saving)
    } catch (err) {
        return res.status(200).send({message: err.message})
    }
})

router.post("", crudController.post(Savings))