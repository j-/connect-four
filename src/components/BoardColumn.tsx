import * as React from 'react';
import BoardCell from './BoardCell';
import './BoardColumn.css';

export interface Props {
	column: number;
	rows: number;
	currentPlayer: string | null;
	canPlaceInColumn: boolean;
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
	const move = (e: React.MouseEvent<HTMLDivElement>) => {
		if (props.currentPlayer) {
			e.preventDefault();
			props.move(props.currentPlayer);
		}
	};
	let className = 'BoardColumn';
	if (props.canPlaceInColumn) {
		className += ' BoardColumn--can-place';
	}
	return (
		<div className={className} onMouseDown={props.canPlaceInColumn ? move : undefined}>
			{cells}
		</div>
	);
};

export default BoardColumn;
