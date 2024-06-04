const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors());

app.get('/api/message', (req,res) => {
    res.json({message: "Hello from the server"})
})

app.listen(4000, () => {
    console.log("I am listening on PORT 4000")
})