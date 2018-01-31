import { connect } from 'react-redux';
import MaybePlayerName from '../components/MaybePlayerName';
import { ReducerState, getCurrentMovePlayerId } from '../store';

interface StateProps {
	name: string | null;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	name: getCurrentMovePlayerId(state),
});

export default connect(
	mapStateToProps,
)(MaybePlayerName);
