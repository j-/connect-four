import { Reducer } from 'redux';
import { isActionMove } from './actions';

export type ReducerState = Array<{
	column: number;
	player: string;
}>;

const DEFAULT_STATE: ReducerState = [];

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionMove(action)) {
		return [
			...state,
			{
				column: action.data.column,
				player: action.data.player,
			},
		];
	}

	return state;
};

export default reducer;

export const getMoveColumn = (state: ReducerState, index: number): number => (
	state[index].column
);

export const getMovePlayer = (state: ReducerState, index: number): string => (
	state[index].player
);

export const getCellPlayerId = (state: ReducerState, column: number, row: number): string | null => {
	const columnMoves = state.filter((move) => move.column === column);
	const move = columnMoves[row];
	return move ? move.player : null;
};
