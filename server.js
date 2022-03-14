const app = require('./index')

const connect = require("./configs/db")

app.listen(7000, async (req, res) =>{
    await connect()
    console.log("listening on port 7000")
})
