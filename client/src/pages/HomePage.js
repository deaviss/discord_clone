import React from 'react'
import Chat from '../components/Chat/Chat'
import Sidebar from '../components/Sidebar/Sidebar'

export default function HomePage() {
	return (
		<div className="App">
			<Sidebar />
			<Chat />
		</div>
	)
}
