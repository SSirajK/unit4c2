const express = require("express")

const app = express();

const userController = require('./controller/user.controllers');

const Mastercontroller = require('./controller/master.controllers')

const branchController = require('./controller/branch.controllers')

const fixedController = require('./controller/fixed.controllers')

const savingsController = require('./controller/savings.controllers')

app.use(express.json())

app.use("/users", userController)

app.use("/masteraccount", Mastercontroller)

app.use("/branchddetail", branchController)

app.use("/savingsaccount", savingsController)

app.use("/fixedaccount", fixedController)

module.exports = app;