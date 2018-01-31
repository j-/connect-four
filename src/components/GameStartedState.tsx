import * as React from 'react';

export interface Props {
	started: boolean;
}

const GameStartedState = (props: Props) => (
	<div className="GameStartedState">
		{props.started ? 'Game started' : 'Waiting...'}
	</div>
);

export default GameStartedState;
