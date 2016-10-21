import React from 'react';
import ReactDOM from 'react-dom';

const dates = ['1905','1910','1915','1920']

class Timeline extends React.Component{
   render(){
      return(
            <div>
            <h1>Hello World!</h1>
            <ul><FirstNode /><SingleNode /><LastNode /></ul>
            <NodeAdder />
            </div>);
	}
}

class NodeAdder extends React.Component{
      constructor(){
            super();
            this.state = {
                  added: 1
            }
            this.addNodeEvent = this.addNodeEvent.bind(this);
      }

addNodeEvent(){
            let x = this.state.added;
            x = x+1;
            this.setState({added: x});
            
      }

      render(){
            const added = this.state.added;
      return <div><button onClick={this.addNodeEvent}>Add Node</button><br />{added}</div>
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

let AddNode = () => {
      return <li>I am an added node!</li>
}

ReactDOM.render(<Timeline />, document.getElementById('app'))

export default Timeline;
