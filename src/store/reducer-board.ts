import { Reducer } from 'redux';

export interface ReducerState {
	columns: number;
	rows: number;
}

const DEFAULT_STATE: ReducerState = {
	columns: 7,
	rows: 6,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	return state;
};

export default reducer;

export const getBoardColumnCount = (state: ReducerState): number => (
	state.columns
);

export const getBoardRowCount = (state: ReducerState): number => (
	state.rows
);
