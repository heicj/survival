import { gameboardState, UPDATE_GAMEBOARD_TILE } from './reducers';

describe('tests gameboard', () => {
  it('default state of board is array of 100', () => {
		const state = gameboardState(undefined, {});
		expect(state.length).toEqual(100);
  });
});