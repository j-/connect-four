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

export interface ActionUndoMove extends Action {
	type: 'UndoMove';
}

export const isActionUndoMove = (action: Action): action is ActionUndoMove => (
	action.type === 'UndoMove'
);

export const undoMove = (column: number): ActionUndoMove => ({
	type: 'UndoMove',
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

export interface ActionStartGame extends Action {
	type: 'StartGame';
}

export const isActionStartGame = (action: Action): action is ActionStartGame => (
	action.type === 'StartGame'
);

export const startGame = (): ActionStartGame => ({
	type: 'StartGame',
});

export interface ActionResetGame extends Action {
	type: 'ResetGame';
}

export const isActionResetGame = (action: Action): action is ActionResetGame => (
	action.type === 'ResetGame'
);

export const resetGame = (): ActionResetGame => ({
	type: 'ResetGame',
});
