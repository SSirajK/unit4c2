const express = require('express')

const mongoose = require('mongoose')

const app = express();

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    middleName: { type: String, required: false},
    lastName: { type: String, required: true},
    age: { type: String, required: true},
    email: { type: String, required: true},
    address: { type: String, required: true},
    gender: { type: String, default: "Female"},
    type: { type: String, default: "customer"}
})

const User = mongoose.model("user", userSchema)

const BranchDetails = new mongoose.Schema({
    name: { type: String, required: true},
    address: { type: String, required: true},
    IFSC: { type: String, required: true},
    MICR: { type: Number, required: true}
})

const branch = mongoose.model("branch", BranchDetails)

const MasterAccount = new mongoose.Schema({
    balance: { type: Number, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
    branchdetails: { type: mongoose.Schema.Types.ObjectId, ref: "branch", required: true}

})

