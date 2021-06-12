import { Avatar } from '@material-ui/core'
import React from 'react'
import TimeAgo from '../TimeAgo/TimeAgo'
import './Message.css'

export default function Message({ avatarSrc, username, timestamp, message }) {
	return (
		<div className="message">
			<Avatar src={avatarSrc} />
			<div className="message__info">
				<h4>
					{username}
					<span className="message__timestamp"> <TimeAgo date={timestamp} /></span>
				</h4>
				<p>{message}</p>
			</div>
		</div>
	)
}
