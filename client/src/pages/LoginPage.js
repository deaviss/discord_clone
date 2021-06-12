import { Button, InputAdornment, TextField } from '@material-ui/core'
import { AccountCircle, Lock } from '@material-ui/icons'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Context from '../Store/context'

export default function LoginPage() {

	const { state, actions } = useContext(Context);

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState({})

	useEffect(() => {
		console.log(error)
	}, [state])


	const handleSubmit = e => {
		e.preventDefault();
		console.log(username, password)

		if (state.token) {
			return setError({ success: false, message: "You're already signed in" })
		}

		fetch('http://localhost:1234/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password,
			}),
		}).then(res => res.json())
			.then(json => {
				console.log('json', json);
				if (json.success) {
					actions({ type: 'setToken', payload: json.token })
				}
				setError(json.error)
			});
	}

	return (
		<div>
			Login here <br /><br />
			<form onSubmit={handleSubmit}>
				<TextField value={username} onChange={(e) => setUsername(e.target.value)} id="username" label="Username" variant="outlined" InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircle />
						</InputAdornment>
					),
				}} /> <br /> <br />
				<TextField value={password} onChange={(e) => setPassword(e.target.value)} id="password" label="Password" type="password" variant="outlined" InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Lock />
						</InputAdornment>
					),
				}} /> <br /> <br />

				<Button type="submit" variant="contained" color="primary">
					SIGN IN
				</Button>

				<Link to="/register">
					<Button variant="contained" color="secondary">
						You don't have an account? Sign up
				</Button>
				</Link>

			</form>
		</div>
	)
}
