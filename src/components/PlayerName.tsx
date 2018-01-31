import * as React from 'react';

export interface Props {
	name: string;
}

const PlayerName = (props: Props) => (
	<strong className="PlayerName">
		{props.name}
	</strong>
);

export default PlayerName;
