const express = require("express")

const crudController = require("./crud.controllers")

const Fixed = require("../models/fixed.models")

const router = express.Router();

router.post("", crudController.post(Fixed))