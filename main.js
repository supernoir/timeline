import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Timeline extends React.Component{
      constructor(){
            super();
            this.state = {
                  trip: [],
                  ndt: [1,2,3]
            };
      }



componentDidMount() {
  this.setState({ndt:[2,4,6]});
    axios.get('http://localhost:3636/events')
      .then(res => {
        let trip = res.data;
      this.setState([ trip ]);
      });
}


render() {
    return (
      <div>
        <h1>Title: {this.state.ndt[1]}{this.state.trip}</h1>
        <ul>
            <li key={1}>Stuff</li>
        </ul>
      </div>
    );
  }

}



ReactDOM.render(<Timeline />, document.getElementById('app'))

export default Timeline;
