import * as React from 'react';
import BoardColumn from './BoardColumn';
import './Board.css';

export interface Props {
	rows: number;
	columns: number;
}

const Board = (props: Props) => {
	const columns = [];
	for (let i = 0; i < props.columns; i++) {
		columns.push(
			<div className="Board-column" key={i}>
				<BoardColumn column={i} rows={props.rows} />
			</div>
		);
	}
	return (
		<div className="Board">
			{columns}
		</div>
	);
};

export default Board;
