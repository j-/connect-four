import { connect } from 'react-redux';
import PlayerName from '../components/PlayerName';
import { ReducerState, getCurrentMovePlayerId } from '../store';

interface StateProps {
	name: string;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	name: getCurrentMovePlayerId(state) || '',
});

export default connect(
	mapStateToProps,
)(PlayerName);
