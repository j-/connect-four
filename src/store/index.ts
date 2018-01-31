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

export const getPlayerColor = (state: ReducerState, id: string): string | null => (
	players.getPlayerColor(state.players, id)
);

export const getTurnNumber = (state: ReducerState): number => (
	game.getTurnNumber(state.game)
);

export const isGameStarted = (state: ReducerState): boolean => (
	game.isGameStarted(state.game)
);
