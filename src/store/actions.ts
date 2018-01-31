import { Action } from 'redux';

export interface ActionMove extends Action {
	type: 'Move';
	data: {
		column: number;
		player: string;
	};
}

export const isActionMove = (action: Action): action is ActionMove => (
	action.type === 'Move'
);

export const move = (column: number, player: string): ActionMove => ({
	type: 'Move',
	data: {
		column,
		player,
	},
});
