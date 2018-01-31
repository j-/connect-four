import { combineReducers } from 'redux';
import * as board from './reducer-board';
import * as moves from './reducer-moves';
import * as players from './reducer-players';
import * as game from './reducer-game';

export interface ReducerState {
	board: board.ReducerState;
	moves: moves.ReducerState;
	players: players.ReducerState;
	game: game.ReducerState;
}

export default combineReducers<ReducerState>({
	board: board.default,
	moves: moves.default,
	players: players.default,
	game: game.default,
});

export const getNumberOfColumns = (state: ReducerState): number => (
	board.getNumberOfColumns(state.board)
);

export const getNumberOfRows = (state: ReducerState): number => (
	board.getNumberOfRows(state.board)
);

export const getMoveColumn = (state: ReducerState, index: number): number => (
	moves.getMoveColumn(state.moves, index)
);

export const getMovePlayer = (state: ReducerState, index: number): string => (
	moves.getMovePlayer(state.moves, index)
);

export const getMoveCount = (state: ReducerState): number => (
	moves.getMoveCount(state.moves)
);

export const getColumnMoveCount = (state: ReducerState, column: number): number => (
	moves.getColumnMoveCount(state.moves, column)
);

export const canPlaceInColumn = (state: ReducerState, column: number): boolean => (
	getColumnMoveCount(state, column) < getNumberOfRows(state)
);

export const getCellPlayerId = (state: ReducerState, column: number, row: number): string | null => (
	moves.getCellPlayerId(state.moves, column, row)
);

export const isGameOver = (state: ReducerState): boolean => (
	moves.isGameOver(
		state.moves,
		getNumberOfColumns(state),
		getNumberOfRows(state)
	)
);

export const getPlayerColor = (state: ReducerState, id: string): string | null => (
	players.getPlayerColor(state.players, id)
);

export const getNumberOfPlayers = (state: ReducerState): number => (
	players.getNumberOfPlayers(state.players)
);

export const getPlayerIdByTurn = (state: ReducerState, turn: number): string => (
	players.getPlayerIdByTurn(state.players, turn)
);

export const isGameStarted = (state: ReducerState): boolean => (
	game.isGameStarted(state.game)
);

export const getConnect = (state: ReducerState): number => (
	game.getConnect(state.game)
);

export const whoseTurn = (state: ReducerState): string | null => (
	isGameStarted(state) ?
		getPlayerIdByTurn(state, getMoveCount(state)) :
		null
);

export const getCellColor = (state: ReducerState, column: number, row: number): string | null => {
	const playerId = getCellPlayerId(state, column, row);
	if (playerId) {
		return getPlayerColor(state, playerId);
	} else {
		return null;
	}
};
