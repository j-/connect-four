import { connect } from 'react-redux';
import Button from '../components/Button';
import { resetGame } from '../store/actions';

const mapDispatchToProps = ({
	onClick: resetGame,
});

export default connect(
	null,
	mapDispatchToProps,
)(Button);
