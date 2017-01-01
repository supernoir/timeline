import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Trips from './trips';



class Timeline extends React.Component{
      constructor(props){
            super(props);
            this.state = {
                  title: [],
            };
      }


componentDidMount() {
    axios.get('http://localhost:3636/events')
      .then(res => {
        console.log(res.status + " " + res.statusText);
        const title = res.data.map(t => t.title);
        console.log(title);
      this.setState({ title });
      });
      console.log("State is " + this.state.title);
}


render() {
    return (
      <div>
      {this.state.title.map((title) => (
            <Trips title={title} />
            ))}
      </div>
    );
  }
}

ReactDOM.render(<Timeline />, document.getElementById('app'))

export default Timeline;
