import { connect } from 'react-redux';
import Board, { Props } from '../components/Board';
import { ReducerState, getNumberOfColumns, getNumberOfRows } from '../store';

const mapStateToProps = (state: ReducerState): Props => ({
	columns: getNumberOfColumns(state),
	rows: getNumberOfRows(state),
});

export default connect(
	mapStateToProps,
)(Board);
