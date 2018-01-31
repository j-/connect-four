import { connect } from 'react-redux';
import Button from '../components/Button';
import { undoMove } from '../store/actions';

const mapDispatchToProps = ({
	onClick: undoMove,
});

export default connect(
	null,
	mapDispatchToProps,
)(Button);
