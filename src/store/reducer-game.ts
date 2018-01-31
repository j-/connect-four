import { Reducer } from 'redux';
import { isActionMove, isActionStartGame, isActionResetGame } from './actions';

export interface ReducerState {
	turn: number;
	started: boolean;
	connect: number;
}

const DEFAULT_STATE: ReducerState = {
	turn: 0,
	started: false,
	connect: 4,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionStartGame(action) || isActionResetGame(action)) {
		return {
			...state,
			turn: 0,
			started: true,
		};
	}

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

export const getConnect = (state: ReducerState): number => (
	state.connect
);
