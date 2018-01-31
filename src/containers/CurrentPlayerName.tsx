import * as React from 'react';
import { connect } from 'react-redux';
import PlayerName, { Props } from '../components/PlayerName';
import { ReducerState, whoseTurn } from '../store';

const CurrentPlayerName = (props: Props) => (
	props.name ?
		<PlayerName name={props.name} /> :
		null
);

interface StateProps {
	name: string | null;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	name: whoseTurn(state),
});

export default connect(
	mapStateToProps,
)(CurrentPlayerName);
