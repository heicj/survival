import { gameboardState, UPDATE_GAMEBOARD_TILE } from './reducers';

describe('tests gameboard', () => {
  it('default state of board is array of 100', () => {
    const state = gameboardState(undefined, {});
    expect(state.length).toEqual(100);
  });
	
  it('update game tile', () => {
    const state = gameboardState(undefined, { type: UPDATE_GAMEBOARD_TILE, payload: { id: 1, value: { 'name': 'updated' } } });
    expect(state[1].name).toEqual('updated');		
  });
});