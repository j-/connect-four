import * as React from 'react';
import Board from '../containers/Board';
import GameStartedState from '../containers/GameStartedState';
import CurrentPlayerName from '../containers/CurrentPlayerName';

const App = () => (
	<div className="App">
		<Board />
		<GameStartedState />
		<div>Current player: <CurrentPlayerName /></div>
	</div>
);

export default App;
