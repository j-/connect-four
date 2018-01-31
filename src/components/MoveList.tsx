import * as React from 'react';
import Move from '../containers/Move';

export interface Props {
	moveCount: number;
}

const MoveList = (props: Props) => {
	const moveListItems = [];
	for (let i = 0; i < props.moveCount; i++) {
		moveListItems.push(
			<div className="MoveList-item" key={i}>
				<Move moveIndex={i} />
			</div>
		);
	}
	return (
		<div className="MoveList">
			{moveListItems}
		</div>
	);
};

export default MoveList;
