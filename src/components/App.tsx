import * as React from 'react';
import Board from './Board';
import GameStartedState from '../containers/GameStartedState';
import CurrentPlayerName from '../containers/CurrentPlayerName';

const App = () => (
	<div className="App">
		<Board rows={6} columns={7} />
		<GameStartedState />
		<div>Current player: <CurrentPlayerName /></div>
	</div>
);

export default App;
