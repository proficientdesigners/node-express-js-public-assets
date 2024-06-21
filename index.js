const express = require('express')
const cors = require('cors')
const app = express()
const port = 8081

app.use(cors())
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/post-login', (req, res) => {
	res.sendFile(__dirname + '/post-login.html')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
