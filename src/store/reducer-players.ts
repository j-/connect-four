import { Reducer } from 'redux';
import { isActionAddPlayer } from './actions';

export type ReducerState = Array<{
	id: string;
	color: string;
}>;

const DEFAULT_STATE: ReducerState = [];

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionAddPlayer(action)) {
		return [
			...state,
			{
				id: action.data.id,
				color: action.data.color,
			},
		];
	}

	return state;
};

export default reducer;

export const getPlayerColor = (state: ReducerState, id: string): string | null => {
	const player = state.find((player) => player.id === id);
	if (player) {
		return player.color;
	} else {
		return null;
	}
};

export const getNumberOfPlayers = (state: ReducerState): number => (
	state.length
);

export const getPlayerIdByTurn = (state: ReducerState, turn: number): string => (
	state[turn % state.length].id
);
