import { Reducer } from 'redux';
import { isActionMove, isActionResetGame, isActionUndoMove } from './actions';

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

	if (isActionUndoMove(action)) {
		return state.slice(0, state.length - 1);
	}

	if (isActionResetGame(action)) {
		return [];
	}

	return state;
};

export default reducer;

export const getMoveColumnIndex = (state: ReducerState, index: number): number => (
	state[index].column
);

export const getMovePlayerId = (state: ReducerState, index: number): string => (
	state[index].player
);

export const getMoveCount = (state: ReducerState): number => (
	state.length
);

export const getMoveCountByColumnIndex = (state: ReducerState, column: number): number => (
	state.reduce((total, move) => move.column === column ? total + 1 : total, 0)
);

export const getMovePlayerIdAtCell = (state: ReducerState, column: number, row: number): string | null => {
	const columnMoves = state.filter((move) => move.column === column);
	const move = columnMoves[row];
	return move ? move.player : null;
};

export const isBoardFull = (state: ReducerState, columns: number, rows: number): boolean => (
	state.length >= columns * rows
);
