import * as React from 'react';
import './Piece.css';

export interface Props {
	color: string | null;
}

const Piece = (props: Props) => (
	props.color ?
		<div className="Piece" style={{ backgroundColor: props.color }} /> :
		null
);

export default Piece;
