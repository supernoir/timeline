import React from 'react';
import ReactDOM from 'react-dom';

// soon to be a mongo document, delivered thru a REST api
const items = {
      '0001': {
            'id':1,
            'name':'Stockholm',
            'date': 1905
      },
      '0002': {
            'id':2,
            'name':'Moscow',
            'date': 1911
      },
      '0003': {
            'id':3,
            'name': 'Valencia',
            'date': '1917'
      },
}

class Timeline extends React.Component{
   render(){
      return(
            <div>
            <h1>My Timeline</h1>
            <NodeAdder />
            </div>);
	}
}

class Item extends React.Component{
      render(){
            return(
                  <li><strong>{items.name}</strong> {items.date}</li>
            );
      }
}

class NodeAdder extends React.Component{
      constructor(props){
            super(props);
            this.state = {
                  inputList: []
            };
            this.addNodeEvent = this.addNodeEvent.bind(this);
      }

addNodeEvent(event){
            const inputList = this.state.inputList;
            this.setState({
                  inputList: inputList.concat(<Item key={items.id} name={items.name} date={items.date} />)
            });
            
      }

      render(){
      return <div>
                  <button onClick={this.addNodeEvent}>Add Node</button>
                  <br />
                  <ul>
                  {this.state.inputList.map(function(input, index) {
                    return input   
                })}
                </ul>
            </div>
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
