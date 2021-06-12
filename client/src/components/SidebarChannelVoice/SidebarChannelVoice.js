import React, { useContext } from 'react'
import '../SidebarChannel/SidebarChannel.css'
import './SidebarChannelVoice.css'
import Context from '../../Store/context'
import { VolumeUp } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'

export default function SidebarChannelVoice({ id, channel }) {

	const { state, actions } = useContext(Context)

	const users = [
		{
			username: "Mokraryba"
		},
		{
			username: "Twojstary"
		},
		{
			username: "Twoja stara zapierdala"
		}
	]

	const handleClick = () => {
		actions({ type: 'setCurrentChannelVoice', payload: channel })
		console.log(channel)
	}

	return (
		<div className="sidebarChannel" >
			<h4 onClick={handleClick} style={state.currentChannel === channel ? { color: 'white' } : null}>
				<span className="sidebarChannel__hash"> <VolumeUp /> </span>
				{channel}
			</h4>
			<div className="sidebarChannel__users">
				{users.map((e, i) => (
					<div key={i} className="sidebarChannel__user">
						<Avatar style={{ height: "28px", width: '28px' }} />
						<span className="sidebarChannel__username">{e.username}</span>
					</div>
				))}
			</div>
		</div>
	)
}
