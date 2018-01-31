import * as React from 'react';
import Board from './Board';
import GameStartedState from '../containers/GameStartedState';

const App = () => (
	<div className="App">
		<Board rows={6} columns={7} />
		<GameStartedState />
	</div>
);

export default App;
