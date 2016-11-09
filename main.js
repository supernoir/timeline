import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Timeline extends React.Component{
      constructor(props){
            super(props);
            this.state = {
                  trip: [],
            };
      }



componentDidMount() {
    axios.get('http://localhost:3636/events')
      .then(res => {
        const trip = res.data.map(s => s.title);
        console.log(trip);
        console.log(res.status + " " + res.statusText)
      this.setState({ trip });
      });
      console.log(this.state.trip);
}


render() {
    return (
      <div>
        <h1>Title: {2*2}</h1>
        <ul>
            <li key={1}>Stuff</li>
        </ul>
      </div>
    );
  }
}




ReactDOM.render(<Timeline />, document.getElementById('app'))

export default Timeline;
