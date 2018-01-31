import { combineReducers } from 'redux';
import * as board from './reducer-board';
import * as moves from './reducer-moves';

export interface ReducerState {
	board: board.ReducerState;
	moves: moves.ReducerState;
}

export default combineReducers<ReducerState>({
	board: board.default,
	moves: moves.default,
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
