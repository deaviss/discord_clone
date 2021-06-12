import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'
import React, { useState, useRef, useEffect, useContext } from 'react'
import ChatHeader from '../ChatHeader/ChatHeader'
import Message from '../Message/Message'
import './Chat.css'
import Context from '../../Store/context'

export default function Chat() {

	const { state, actions } = useContext(Context);

	const [testMessages, setTestMessages] = useState([]);

	const messagesRef = useRef(null)
	useEffect(() => {
		messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
	}, [testMessages])

	useEffect(() => {
		let tmp = state.currentMessages.filter(e => e.channelName == state.currentChannel)
		setTestMessages(tmp)
	}, [state])

	const [textMessage, setTextMessage] = useState('');
	const inputRef = useRef(null);

	const handleSendChat = e => {
		e.preventDefault();
		if (inputRef.current.value.trim().length > 0) {
			const tmp = [...testMessages]
			const nMsg = {
				username: "Mokraryba",
				timestamp: Date.now(),
				message: inputRef.current.value,
				channelName: state.currentChannel
			}
			tmp.push(nMsg)
			actions({ type: 'addMessage', payload: nMsg })
			setTestMessages(tmp)
			inputRef.current.value = ""
		}

		setTextMessage("")
	}

	const handleInputChange = e => {
		setTextMessage(e.target.value)
	}

	return (
		<div className="chat">
			<ChatHeader />

			<div className="chat__messages" ref={messagesRef}>
				{testMessages.map(({ message, username, timestamp, avatarSrc }, i) => (
					<Message key={i} message={message} username={username} avatarSrc={avatarSrc} timestamp={timestamp} />
				))}
			</div>

			<div className="chat__input">
				<AddCircle fontSize="large" />
				<form onSubmit={handleSendChat}>
					<input ref={inputRef} onChange={handleInputChange} value={textMessage} type="text" placeholder={`Message #TestChannel`} />
					<button type='submit' className="chat__inputButton">
						Send Message
					</button>
				</form>

				<div className="chat__inputIcons">
					<CardGiftcard fontSize="large" />
					<Gif fontSize="large" />
					<EmojiEmotions fontSize="large" />
				</div>
			</div>
		</div>
	)
}
