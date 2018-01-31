import { connect } from 'react-redux';
import Board, { Props } from '../components/Board';
import { ReducerState, getBoardColumnCount, getBoardRowCount } from '../store';

const mapStateToProps = (state: ReducerState): Props => ({
	columns: getBoardColumnCount(state),
	rows: getBoardRowCount(state),
});

export default connect(
	mapStateToProps,
)(Board);
