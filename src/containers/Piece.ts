import { connect } from 'react-redux';
import Piece, { Props } from '../components/Piece';
import { ReducerState, getCellColor } from '../store';

type StateProps = Props;
type DispatchProps = {};

interface OwnProps {
	column: number;
	row: number;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): Props => ({
	color: getCellColor(state, props.column, props.row),
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
)(Piece);
