import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { gameboardData } from './gameboardData';
import GameboardTile from '../gameboardTile/GameboardTile';
import './gameboard.css';

class Gameboard extends PureComponent{


  render(){
    const { gameboardData } = this.props;
    return (
      <div id='gameboard'>
        {gameboardData.map((cell, i) => <GameboardTile key={i} id={cell.id} data={cell}/>)}
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    gameboardData: state.gameboardState
  }),
  null
)(Gameboard);