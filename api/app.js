const cors = require('cors')
const express = require('express')
const db = require('./connection')
const userRoutes = require('./routes/users')
require('dotenv').config()

// Connect
db.connect(err => {
	if (err) throw console.log('Connection Failed', err)
	console.log('MySQL Database connected... 👍')
})

const app = express()
app.use(express.json())
app.use(cors())

// create database
app.get('/createdb', (req, res) => {
	let sql = 'CREATE DATABASE nodemysql'
	db.query(sql, (err, result) => {
		if (err) throw err
		res.json('Database Created...')
	})
})

app.use('/user', userRoutes)

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server running on port ${port} 🚀`))

/**
 * If authentication problem happens, run this query:
 * ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
 * flush privileges;
 */
