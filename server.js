const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.port || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'client')))

app.get('/search/*', (req, res) => {
	let data = {
		count: 4,
		nodes: [
			{ text: 'node1' }, {text: 'node2'},
		],
		accounts: [
			{ text: 'user1' }, {text: 'user2'},
		]
	}
	res.send(data).json()
})

app.get('/api/*', (req, res) => {
	res.send('api-node')
})

app.listen(port, (req, res) => {
	console.log(`server listening (${port})`)
})
