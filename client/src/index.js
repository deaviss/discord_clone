import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import useGlobalState from './Store/useGlobalState'
import Context from './Store/context'

const Index = () => {
	const store = useGlobalState();
	return (
		<>
			<Context.Provider value={store}>
				<App />
			</Context.Provider>
		</>
	)
}

ReactDOM.render(<Index />, document.getElementById('root'));
