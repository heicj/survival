import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Home extends PureComponent{


  render(){
    return (
      <div>
        <div>hello</div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Home);