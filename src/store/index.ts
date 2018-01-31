import { combineReducers } from 'redux';
import * as board from './reducer-board';

export interface ReducerState {
	board: board.ReducerState;
}

export default combineReducers<ReducerState>({
	board: board.default,
});

export const getNumberOfColumns = (state: ReducerState): number => (
	board.getNumberOfColumns(state.board)
);

export const getNumberOfRows = (state: ReducerState): number => (
	board.getNumberOfRows(state.board)
);
