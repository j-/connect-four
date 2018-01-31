import { Reducer } from 'redux';

export interface ReducerState {

}

const DEFAULT_STATE: ReducerState = {

};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	return state;
};

export default reducer;
