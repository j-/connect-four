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

export const getBoardColumnCount = (state: ReducerState): number => (
	board.getBoardColumnCount(state.board)
);

export const getBoardRowCount = (state: ReducerState): number => (
	board.getBoardRowCount(state.board)
);

export const getMoveColumnIndex = (state: ReducerState, moveIndex: number): number => (
	moves.getMoveColumnIndex(state.moves, moveIndex)
);

export const getMovePlayerId = (state: ReducerState, moveIndex: number): string => (
	moves.getMovePlayerId(state.moves, moveIndex)
);

export const getMoveCount = (state: ReducerState): number => (
	moves.getMoveCount(state.moves)
);

export const getMoveCountByColumnIndex = (state: ReducerState, columnIndex: number): number => (
	moves.getMoveCountByColumnIndex(state.moves, columnIndex)
);

export const isColumnFull = (state: ReducerState, columnIndex: number): boolean => (
	getMoveCountByColumnIndex(state, columnIndex) >= getBoardRowCount(state)
);

export const getMovePlayerIdAtCell = (state: ReducerState, columnIndex: number, rowIndex: number): string | null => (
	moves.getMovePlayerIdAtCell(state.moves, columnIndex, rowIndex)
);

export const isGameOver = (state: ReducerState): boolean => (
	moves.isBoardFull(
		state.moves,
		getBoardColumnCount(state),
		getBoardRowCount(state)
	)
);

export const getColorByPlayerId = (state: ReducerState, playerId: string): string | null => (
	players.getColorByPlayerId(state.players, playerId)
);

export const getPlayerCount = (state: ReducerState): number => (
	players.getPlayerCount(state.players)
);

export const getPlayerIdByMoveIndex = (state: ReducerState, moveIndex: number): string => (
	players.getPlayerIdByMoveIndex(state.players, moveIndex)
);

export const isGameStarted = (state: ReducerState): boolean => (
	game.isGameStarted(state.game)
);

export const getConnectNumber = (state: ReducerState): number => (
	game.getConnectNumber(state.game)
);

export const getCurrentMovePlayerId = (state: ReducerState): string | null => (
	isGameStarted(state) ?
		getPlayerIdByMoveIndex(state, getMoveCount(state)) :
		null
);

export const getCellColor = (state: ReducerState, columnIndex: number, rowIndex: number): string | null => {
	const playerId = getMovePlayerIdAtCell(state, columnIndex, rowIndex);
	if (playerId) {
		return getColorByPlayerId(state, playerId);
	} else {
		return null;
	}
};
