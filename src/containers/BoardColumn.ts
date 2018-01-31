import { connect } from 'react-redux';
import BoardColumn from '../components/BoardColumn';
import { move } from '../store/actions';
import { Dispatch, Action } from 'redux';
import { ReducerState, whoseTurn } from '../store';

interface StateProps {
	currentPlayer: string | null;
}

interface DispatchProps {
	move: (player: string) => void;
}

interface OwnProps {
	column: number;
	rows: number;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	currentPlayer: whoseTurn(state),
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
