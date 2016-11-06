import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Timeline extends React.Component{
      constructor(props){
            super(props);
            this.state = {
                  trips: []
            }
      }

componentDidMount() {


    axios.get('http://localhost:3636/events')
      .then(res => {
        const trips = res.data;
                console.log(res.data);
      this.setState([ trips ]);
      console.log(trips.trip_01.title);
      console.log(trips.trip_01.loc);
      });
}


render() {
    return (
      <div>
        <h1>Title: {this.state.trips.trip_01.title}</h1>
        <ul>
            <li key={this.state.trips}>{this.state.trips.title}</li>
        </ul>
      </div>
    );
  }
}



ReactDOM.render(<Timeline />, document.getElementById('app'))

export default Timeline;
