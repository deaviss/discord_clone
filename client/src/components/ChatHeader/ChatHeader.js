import { EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React, { useContext } from 'react'
import Context from '../../Store/context'
import './ChatHeader.css'

export default function ChatHeader() {
	const { state } = useContext(Context);
	return (
		<div className="chatHeader">
			<div className="chatHeader__left">
				<h3>
					<span className="chatHeader__hash">#</span>
					{state.currentChannel}
				</h3>
			</div>
			<div className="chatHeader__right">
				<Notifications />
				<EditLocationRounded />
				<PeopleAltRounded />

				<div className="chatHeader__search">
					<input placeholder="Search" />
					<SearchRounded />
				</div>

				<SendRounded />
				<HelpRounded />

			</div>
		</div>
	)
}
