import * as React from 'react';
import './Piece.css';

export interface Props {
	color: string;
}

const Piece = (props: Props) => (
	<div className="Piece" style={{ backgroundColor: props.color }} />
);

export default Piece;
