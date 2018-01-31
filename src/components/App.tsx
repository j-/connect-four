import * as React from 'react';
import Board from '../containers/Board';
import GameStartedState from '../containers/GameStartedState';
import CurrentPlayerName from '../containers/CurrentPlayerName';
import ResetGameButton from '../containers/ResetGameButton';
import UndoMoveButton from '../containers/UndoMoveButton';

const App = () => (
	<div className="App">
		<Board />
		<GameStartedState />
		<div>Current player: <CurrentPlayerName /></div>

		<br />
		<br />
		<UndoMoveButton>Undo</UndoMoveButton>

		<br />
		<br />
		<ResetGameButton>Reset game</ResetGameButton>
	</div>
);

export default App;
