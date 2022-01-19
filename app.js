const express = require('express')
const mysql = require('mysql')
require('dotenv').config()

// Create connection
const db = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
})

// Connect
db.connect(err => {
	if (err) throw err
	console.log('MySQL Database connected... 👍')
})

const app = express()

// create database
app.get('/createdb', (req, res) => {
	let sql = 'CREATE DATABASE nodemysql'
	db.query(sql, (err, result) => {
		if (err) throw err
		res.json('Database Created...')
	})
})

// create table
app.get('/createpoststable', (req, res) => {
	let sql =
		'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
	db.query(sql, (err, result) => {
		if (err) throw err
		res.json('Table has been created..')
	})
})

// insert post 1
app.get('/addpost1', (req, res) => {
	let post = {
		title: 'Post title three',
		body: 'this is the post body three',
	}
	let sql = 'INSERT INTO posts SET ?'
	db.query(sql, post, (err, result) => {
		if (err) throw err
		res.json('Post has been added')
	})
})

// select table data
app.get('/getposts', (req, res) => {
	let sql = 'SELECT * FROM posts'
	db.query(sql, (err, result) => {
		if (err) throw err
		res.json(result)
	})
})

// select single post
app.get('/getpost/:id', (req, res) => {
	let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`
	db.query(sql, (err, result) => {
		if (err) throw err
		res.json(result)
	})
})

// update single post
app.get('/updatepost/:id', (req, res) => {
	let newTitle = 'Updated title'
	let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`
	db.query(sql, (err, result) => {
		if (err) throw err
		res.json(result)
	})
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server running on port ${port} 🚀`))

/**
 * If authentication problem happens, run this query:
 * ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
 * flush privileges;
 */
