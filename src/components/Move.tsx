import * as React from 'react';
import PlayerName from './PlayerName';

export interface Props {
	playerName: string;
	columnIndex: number;
}

const Move = (props: Props) => (
	<div className="Move">
		<PlayerName name={props.playerName} /> played in column {props.columnIndex + 1}
	</div>
);

export default Move;
