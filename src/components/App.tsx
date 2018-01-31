import * as React from 'react';
import Board from '../containers/Board';
import GameStartedState from '../containers/GameStartedState';
import CurrentPlayerName from '../containers/CurrentPlayerName';
import ResetGameButton from '../containers/ResetGameButton';
import UndoMoveButton from '../containers/UndoMoveButton';

const App = () => (
	<div className="App">
		<Board />
		<br />

		<GameStartedState />
		<br />

		<div>Current player: <CurrentPlayerName /></div>
		<br />

		<UndoMoveButton>Undo</UndoMoveButton>
		<ResetGameButton>Reset game</ResetGameButton>
	</div>
);

export default App;
