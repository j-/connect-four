import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import './index.css';

import { addPlayer, startGame } from './store/actions';

const store = createStore(rootReducer, composeWithDevTools());

store.dispatch(addPlayer('Yellow', 'hsl(60, 80%, 60%)'));
store.dispatch(addPlayer('Red', 'hsl(0, 80%, 60%)'));
store.dispatch(startGame());

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
