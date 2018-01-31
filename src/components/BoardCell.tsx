import * as React from 'react';
import Piece from '../containers/Piece';
import './BoardCell.css';

export interface Props {
	column: number;
	row: number;
}

const BoardCell = (props: Props) => (
	<div className="BoardCell">
		<div className="BoardCell-sleeve" />
		<div className="BoardCell-piece">
			<Piece column={props.column} row={props.row} />
		</div>
	</div>
);

export default BoardCell;
