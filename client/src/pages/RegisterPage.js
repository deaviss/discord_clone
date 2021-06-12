import { Button, InputAdornment, TextField } from '@material-ui/core'
import { AccountCircle, Email, Lock } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function RegisterPage() {

	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState({})
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		console.log(username, password)

		fetch('http://localhost:1234/signUp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password,
				email
			}),
		}).then(res => res.json())
			.then(json => {
				console.log('json', json);
				setError(json)
			});
	}

	useEffect(() => {
		const to = setTimeout(() => {
			setError({})

			if (error.success === true) {
				history.push("/login");
			}
		}, 3500);
		return () => {
			clearTimeout(to);
		}

	}, [error])


	return (
		<div>
			Register here <br /><br />
			<form onSubmit={handleSubmit}>
				<TextField value={username} onChange={(e) => setUsername(e.target.value)} id="username" label="Username" variant="outlined" InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircle />
						</InputAdornment>
					),
				}} /> <br /> <br />

				<TextField value={email} onChange={(e) => setEmail(e.target.value)} id="email" label="Email" type='email' variant="outlined" InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Email />
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
					SIGN UP
				</Button>

				<Link to="/login">
					<Button variant="contained" color="secondary">
						Already a member? Sign in
				</Button>
				</Link> <br /><br /><br />
				{
					(error?.success) ? <div style={{ backgroundColor: "green" }}>
						{error.message}
					</div> : <div style={{ backgroundColor: "red" }}>
						{error.message}
					</div>
				}

			</form>
		</div>
	)
}
