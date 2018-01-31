import * as React from 'react';
import BoardCell from './BoardCell';
import './BoardColumn.css';

export interface Props {
	rows: number;
}

const BoardColumn = (props: Props) => {
	const cells = [];
	for (let i = 0; i < props.rows; i++) {
		cells.push(
			<div className="Board-column" key={i}>
				<BoardCell color="transparent" />
			</div>
		);
	}
	return (
		<div className="BoardColumn">
			{cells}
		</div>
	);
};

export default BoardColumn;
