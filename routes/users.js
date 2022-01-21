const router = require('express').Router()
const db = require('../connection')

// CREATE TABLE - USERS
router.get('/table', (req, res) => {
	let sql =
		'CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT, name VARCHAR(255), age INT, mark INT, PRIMARY KEY(id))'
	db.query(sql, (err, result) => {
		if (err) throw res.status(500).json(err)
		res.status(200).json('Users Table has been created..')
	})
})

router.delete('/table', (req, res) => {
	let sql = 'DROP TABLE IF EXISTS users'
	db.query(sql, (err, result) => {
		if (err) throw res.status(500).json('Table not delete...')
		res.status(200).json('User Table has been deleted...')
	})
})

// CREATE USER
router.post('/', (req, res) => {
	let sql = `INSERT INTO users SET ?`
	db.query(sql, req.body, (err, result) => {
		if (err) throw res.status(500).json(err)
		res.status(200).json('User has been added')
	})

	// Alter Method:
	// const { name, age, mark } = req.body
	// let sql = `INSERT INTO users (name, age, mark) VALUES ('${name}', ${age}, ${mark});`
	// db.query(sql, (err, result) => {}
})

// UPDATE USER
router.put('/:id', (req, res) => {
	let sql = `UPDATE users SET ? WHERE id = ${req.params.id}`

	db.query(sql, req.body, (err, result) => {
		if (err) throw res.status(500).json(err)
		res.status(200).json(result)
	})
})

// DELETE ALL USERS
router.delete('/', (req, res) => {
	let sql = 'DELETE FROM users'
	db.query(sql, (err, result) => {
		if (err) throw res.status(500).json(err)
		res.status(200).json('Users has been deleted!')
	})
})

// DELETE USER
router.delete('/:id', (req, res) => {
	let sql = `DELETE FROM users WHERE id = ${req.params.id}`
	db.query(sql, (err, result) => {
		if (err) throw res.status(500).json(err)
		res.status(200).json('User has been deleted!')
	})
})

// GET ALL USERS
router.get('/', (req, res) => {
	let sql = 'SELECT * FROM users'
	db.query(sql, (err, result) => {
		if (err) throw res.status(500).json(err)
		res.status(200).json(result)
	})
})

// GET SINGLE USER
router.get('/:id', (req, res) => {
	let sql = `SELECT * FROM users WHERE id = ${req.params.id}`
	db.query(sql, (err, result) => {
		if (err) throw res.status(500).json(err)
		res.status(200).json(result)
	})
})

// GET A PARTICULAR OF ALL USERS
router.get('/field/:fieldName', (req, res) => {
	let sql = `SELECT ${req.params.fieldName} FROM users`
	db.query(sql, (err, result) => {
		if (err) throw res.status(500).json(err)
		res.status(200).json(result)
	})
})

module.exports = router
