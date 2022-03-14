const mongoose = require('mongoose')
module.exports = () => {
    return mongoose.connect("mongodb+srv://siraj:siraj123@unit4.ndpma.mongodb.net/unit4?retryWrites=true&w=majority")
}