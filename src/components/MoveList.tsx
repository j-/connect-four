import * as React from 'react';
import Move from '../containers/Move';

export interface Props {
	moveCount: number;
}

const MoveList = (props: Props) => {
	const moveListItems = [];
	for (let i = 0; i < props.moveCount; i++) {
		moveListItems.push(
			<li className="MoveList-item" key={i}>
				<Move moveIndex={i} />
			</li>
		);
	}
	return (
		<ol className="MoveList">
			{moveListItems}
		</ol>
	);
};

export default MoveList;
