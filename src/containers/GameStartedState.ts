import { connect } from 'react-redux';
import GameStartedState, { Props } from '../components/GameStartedState';
import { ReducerState, isGameStarted } from '../store';

const mapStateToProps = (state: ReducerState): Props => ({
	started: isGameStarted(state),
});

export default connect(
	mapStateToProps,
)(GameStartedState);
