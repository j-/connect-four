import { Reducer } from 'redux';
import { isActionStartGame, isActionResetGame } from './actions';

export interface ReducerState {
	started: boolean;
	connect: number;
}

const DEFAULT_STATE: ReducerState = {
	started: false,
	connect: 4,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionStartGame(action) || isActionResetGame(action)) {
		return {
			...state,
			started: true,
		};
	}

	return state;
};

export default reducer;

export const isGameStarted = (state: ReducerState): boolean => (
	state.started
);

export const getConnect = (state: ReducerState): number => (
	state.connect
);
