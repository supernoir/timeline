import React from 'react';
import ReactDOM from 'react-dom';

const dates = ['1905','1910','1915','1920']

class Timeline extends React.Component{
   render(){
      return(
            <div>
            <h1>Hello World!</h1>
            <ul><FirstNode /><SingleNode /><LastNode /></ul>
            </div>);
	}
}

let SingleNode = () => {
            return <li>I am a single node</li>
}

let FirstNode = () => {
            return <li>I am a first node</li>
}

let LastNode = () => {
      return <li>I am the very last node</li>
}

ReactDOM.render(<Timeline />, document.getElementById('app'))

export default Timeline;
