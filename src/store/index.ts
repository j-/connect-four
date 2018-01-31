import { combineReducers } from 'redux';
import * as board from './reducer-board';

export interface ReducerState {
	board: board.ReducerState;
}

export default combineReducers<ReducerState>({
	board: board.default,
});
