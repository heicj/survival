import React, { Component } from 'react';
import { connect } from 'react-redux';
import './gameboardTile.css';

class GameboardTile extends Component{
  render(){
    const { data } = this.props;
    return (
      <div className="tileContainer">
        <div className="innerTileDiv">
          {data.img ?
            <img className='img' src={data.img}/>
            : 
            null
          }
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(GameboardTile);