const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const connectDb = require('./config/connect.js')

const app = express()
const port = 8888

dotenv.config()
connectDb()

app.use(express.json()) // Parses JSON dated from post/put requests
app.use(cors()) // allows front and backend to talk to each other if they are on different servers

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
