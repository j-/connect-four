import { connect } from 'react-redux';
import MoveList from '../components/MoveList';
import { ReducerState, getMoveCount } from '../store';

interface StateProps {
	moveCount: number;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	moveCount: getMoveCount(state),
});

export default connect(
	mapStateToProps,
)(MoveList);
