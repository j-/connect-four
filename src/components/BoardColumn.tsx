import * as React from 'react';
import BoardCell from './BoardCell';
import './BoardColumn.css';

export interface Props {
	column: number;
	rows: number;
	currentPlayer: string | null;
	move: (currentPlayer: string) => void;
}

const BoardColumn = (props: Props) => {
	const cells = [];
	for (let i = 0; i < props.rows; i++) {
		cells.push(
			<div className="Board-column" key={i}>
				<BoardCell column={props.column} row={i} />
			</div>
		);
	}
	const move = () => {
		if (props.currentPlayer) {
			props.move(props.currentPlayer);
		}
	};
	return (
		<div className="BoardColumn" onMouseDown={move}>
			{cells}
		</div>
	);
};

export default BoardColumn;
