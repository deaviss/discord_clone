import { Avatar } from '@material-ui/core'
import { Add, Call, ExpandMore, Headset, InfoOutlined, Mic, Settings, SignalCellularAlt } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import SidebarChannel from '../SidebarChannel/SidebarChannel'
import SidebarChannelVoice from '../SidebarChannelVoice/SidebarChannelVoice'
import './Sidebar.css'

export default function Sidebar() {

	const [channels, setChannels] = useState([]);
	const [channelsVoice, setChannelsVoice] = useState([]);

	useEffect(() => {
		setChannels([
			{
				id: 123,
				channel: 'Youtube'
			},
			{
				id: 1234,
				channel: 'Test1'
			},
			{
				id: 12345,
				channel: 'DiscordBot'
			},
		])
		setChannelsVoice([
			{
				id: 123,
				channel: 'Speaker1'
			},
			{
				id: 1234,
				channel: 'Test speak 2'
			},
			{
				id: 12345,
				channel: 'Teamspeak > discord'
			},
		])
	}, [])

	const handleAddChannelText = () => {
		const channelName = prompt("Enter new channel name")
		if (channelName) {
			let tmpChannels = [...channels];
			tmpChannels.push({ id: Math.floor(Math.random() * 123456), channel: channelName })
			setChannels(tmpChannels)
		}
	}
	const handleAddChannelVoice = () => {
		const channelName = prompt("Enter new channel name")
		if (channelName) {
			let tmpChannels = [...channels];
			tmpChannels.push({ id: Math.floor(Math.random() * 123456), channel: channelName })
			setChannels(tmpChannels)
		}
	}

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<h3>Mokraryba's server</h3>
				<ExpandMore />
			</div>

			<div className="sidebar__channels">
				<div className="sidebar__channelsHeader">
					<div className="sidebar__header">
						<ExpandMore />
						<h4>Text Channels</h4>
					</div>
					<Add onClick={handleAddChannelText} className="sidebar__addChannel" />
				</div>
				<div className="sidebar__channelsList">
					{channels.map(({ id, channel }) => (
						<SidebarChannel key={id} id={id} channel={channel} />
					))}
				</div>



				<div className="sidebar__channelsHeader">
					<div className="sidebar__header">
						<ExpandMore />
						<h4>Voice Channels</h4>
					</div>
					<Add onClick={handleAddChannelVoice} className="sidebar__addChannel" />
				</div>
				<div className="sidebar__channelsList">
					{channelsVoice.map(({ id, channel }) => (
						<SidebarChannelVoice key={id} id={id} channel={channel} />

					))}
				</div>
			</div>

			<div className="sidebar__voice">
				<SignalCellularAlt
					className="sidebar__voiceIcon"
					fontSize="large"
				/>

				<div className="sidebar__voiceInfo">
					<h3>Voice connected</h3>
					<p>Stream</p>
				</div>

				<div className="sidebar__voiceIcons">
					<InfoOutlined />
					<Call />
				</div>
			</div>

			<div className="sidebar__profile">
				<Avatar src="https://www.wykop.pl/cdn/c3201142/comment_QzSd8TJZ0ZJ3VdeHIL3lzLayzMGFObfc.jpg" />
				<div className="sidebar__profileInfo">
					<h3>MokrarybaMokraryba</h3>
					<p>#2137</p>
				</div>

				<div className="sidebar__profileIcons">
					<Mic />
					<Headset />
					<Settings />
				</div>
			</div>

		</div>
	)
}
