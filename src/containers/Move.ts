import { connect } from 'react-redux';
import Move from '../components/Move';
import { ReducerState, getPlayerIdByMoveIndex, getMoveColumnIndex } from '../store';

interface StateProps {
	playerName: string;
	columnIndex: number;
}

interface OwnProps {
	moveIndex: number;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): StateProps => ({
	playerName: getPlayerIdByMoveIndex(state, props.moveIndex),
	columnIndex: getMoveColumnIndex(state, props.moveIndex),
});

export default connect(
	mapStateToProps,
)(Move);
