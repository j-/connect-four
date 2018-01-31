import * as React from 'react';
import PlayerName from './PlayerName';

export interface Props {
	name: string | null;
}

const MaybePlayerName = (props: Props) => (
	props.name ?
		<PlayerName name={props.name} /> :
		null
);

export default MaybePlayerName;
