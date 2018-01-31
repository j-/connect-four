import { Reducer } from 'redux';
import { isActionAddPlayer } from './actions';

export interface ReducerState {
	[id: string]: {
		color: string;
	};
}

const DEFAULT_STATE: ReducerState = {};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionAddPlayer(action)) {
		return {
			...state,
			[action.data.id]: {
				color: action.data.color,
			},
		};
	}

	return state;
};

export default reducer;

export const getColorByPlayerId = (state: ReducerState, id: string): string | null => (
	state[id] ?
		state[id].color :
		null
);

export const getPlayerCount = (state: ReducerState): number => (
	Object.keys(state).length
);

export const getPlayerIdByMoveIndex = (state: ReducerState, moveIndex: number): string => (
	Object.keys(state)[moveIndex % getPlayerCount(state)]
);
