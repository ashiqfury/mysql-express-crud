import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
	const [users, setUsers] = useState([])

	const fetchUsers = async () => {
		await axios.get('http://localhost:2406/user').then(res => {
			setUsers(res.data)
		})
	}

	const deleteUser = async id => {
		await axios
			.delete(`http://localhost:2406/user/${id}`)
			.then(res => console.log(res.data))
			.catch(err => console.log(err))
	}

	const createUser = async () => {
		const newUser = {
			name: 'rizwana',
			age: 21,
			mark: 99,
		}
		await axios.post('http://localhost:2406/user', newUser)
	}

	const updateUser = async id => {
		await axios
			.put(`http://localhost:2406/user/${id}`, {
				name: 'ashiq',
				// age: 24,
				// mark: 98
			})
			.then(res => console.log(res.data))
	}

	useEffect(() => {
		//deleteUser(16)
		//createUser()
		//updateUser(11)
		fetchUsers()
	}, [])

	return (
		<div className="container">
			<h1>API SQL Demo</h1>
			{users.map(e => (
				<div key={e.id}>
					<span>{e.id}</span> || <span>{e.name}</span> || <span>{e.age}</span> ||{' '}
					<span>{e.mark}</span>
				</div>
			))}
		</div>
	)
}

export default App
