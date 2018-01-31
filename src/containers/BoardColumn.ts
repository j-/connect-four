import { connect } from 'react-redux';
import BoardColumn from '../components/BoardColumn';
import { move } from '../store/actions';
import { Dispatch, Action } from 'redux';

interface StateProps {

}

interface DispatchProps {
	onClick: () => void;
}

interface OwnProps {
	column: number;
	rows: number;
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps): DispatchProps => ({
	onClick: () => dispatch(
		move(props.column, 'Player 1')
	),
});

export default connect<StateProps, DispatchProps, OwnProps>(
	null,
	mapDispatchToProps,
)(BoardColumn);
