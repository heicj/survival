import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { gameboardData } from './gameboardData';

class Gameboard extends PureComponent{


  render(){
    // const gameboardData = this.props.gameboardData;
    return (
      <div>
        {gameboardData.map((cell, i) => <div key={i} id={cell.id}>{cell.id}</div>)}
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Gameboard);