import * as React from 'react';

export interface Props {
	name: string;
}

const PlayerName = (props: Props) => (
	<div className="PlayerName">
		{props.name}
	</div>
);

export default PlayerName;
