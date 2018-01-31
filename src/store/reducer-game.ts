import { Reducer } from 'redux';
import { isActionMove } from './actions';

export interface ReducerState {
	turn: number;
	started: boolean;
}

const DEFAULT_STATE: ReducerState = {
	turn: 0,
	started: false,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionMove(action)) {
		return {
			...state,
			turn: state.turn + 1,
		};
	}

	return state;
};

export default reducer;

export const getTurnNumber = (state: ReducerState): number => (
	state.turn
);

export const isGameStarted = (state: ReducerState): boolean => (
	state.started
);
