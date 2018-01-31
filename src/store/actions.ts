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

export interface ActionAddPlayer extends Action {
	type: 'AddPlayer';
	data: {
		id: string;
		color: string;
	};
}

export const isActionAddPlayer = (action: Action): action is ActionAddPlayer => (
	action.type === 'AddPlayer'
);

export const addPlayer = (id: string, color: string): ActionAddPlayer => ({
	type: 'AddPlayer',
	data: {
		id,
		color,
	},
});
