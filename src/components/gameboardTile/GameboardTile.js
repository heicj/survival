import React, { Component } from 'react';
import { connect } from 'react-redux';
import './gameboardTile.css';

class GameboardTile extends Component{
  render(){
    const { data } = this.props;
    return (
      <div className="tileContainer">
        <div className="innerTileDiv">{data.id}</div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(GameboardTile);