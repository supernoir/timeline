import React from 'react';

class Trips extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
    <h1>{this.props.title}</h1>
    </div>)
  }

}

export default Trips;