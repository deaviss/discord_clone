import { useState } from 'react'

const useGlobalState = () => {
	const [state, setState] = useState({
		todo: [],
		test: "",
		token: "",
		user: {},
		currentChannel: 'Youtube',
		currentMessages: [
			{
				username: 'Mokraryba',
				timestamp: Date.now(),
				message: 'Test msg 123',
				channelName: 'Youtube'
			},
			{
				username: 'Mokraryba',
				timestamp: 1623416417392,
				message: 'Test msg 4',
				channelName: 'Youtube'
			},
			{
				username: 'Mokraryba',
				timestamp: Date.now(),
				message: 'Test msg',
				channelName: 'Test1'
			},
		]
	})

	const actions = action => {
		const { type, payload } = action;
		switch (type) {
			case 'setState':
				return setState(prevState => ({
					...prevState,
					test: payload
				}));
			case 'setToken':
				localStorage.setItem("token", payload)
				return setState(prevState => ({
					...prevState,
					token: payload
				}));
			case 'logout':
				localStorage.setItem("token", '')
				return setState(prevState => ({
					...prevState,
					token: ''
				}));
			case 'setCurrentChannel':
				return setState(prevState => ({
					...prevState,
					currentChannel: payload
				}));
			case 'setCurrentMessages':
				return setState(prevState => ({
					...prevState,
					currentMessages: payload
				}));
			case 'addMessage':
				const tmp = [...state.currentMessages];
				tmp.push(payload);
				return setState(prevState => ({
					...prevState,
					currentMessages: tmp
				}));
			default:
				return state;

		}
	}
	return { state, actions }
}

export default useGlobalState;