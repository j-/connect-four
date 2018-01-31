import * as React from 'react';
import Piece from './Piece';
import './BoardCell.css';

export interface Props {
	color: string;
}

const BoardCell = (props: Props) => (
	<div className="BoardCell">
		<div className="BoardCell-sleeve" />
		<div className="BoardCell-piece">
		{
			Math.random() > 0.5 ?
			Math.random() > 0.5 ?
				<Piece color="hsl(0, 80%, 60%)" /> :
				<Piece color="hsl(60, 80%, 60%)" /> :
				null
		}
		</div>
	</div>
);

export default BoardCell;
