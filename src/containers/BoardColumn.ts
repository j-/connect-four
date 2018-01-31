import { connect } from 'react-redux';
import BoardColumn from '../components/BoardColumn';
import { move } from '../store/actions';
import { Dispatch, Action } from 'redux';
import { ReducerState, getCurrentMovePlayerId, isColumnFull } from '../store';

interface StateProps {
	currentPlayer: string | null;
	canPlaceInColumn: boolean;
}

interface DispatchProps {
	move: (player: string) => void;
}

interface OwnProps {
	column: number;
	rows: number;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): StateProps => ({
	currentPlayer: getCurrentMovePlayerId(state),
	canPlaceInColumn: !isColumnFull(state, props.column),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps): DispatchProps => ({
	move: (player) => dispatch(
		move(props.column, player)
	),
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(BoardColumn);
