import React, { useContext } from 'react'
import './SidebarChannel.css'
import Context from '../../Store/context'

export default function SidebarChannel({ id, channel }) {

	const { state, actions } = useContext(Context)

	const handleClick = () => {
		actions({ type: 'setCurrentChannel', payload: channel })

	}

	return (
		<div className="sidebarChannel" onClick={handleClick}>
			<h4 style={state.currentChannel === channel ? { color: 'white' } : null}>
				<span className="sidebarChannel__hash">#</span>
				{channel}

			</h4>
		</div>
	)
}
