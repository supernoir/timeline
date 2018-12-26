import React from 'react';
import ReactDOM from 'react-dom';

class Timeline extends React.Component{
	constructor(){
		super();
		this.state = {
			events: []
		};
	}
	getEvents() {

		fetch('http://localhost:3636/events', {
			method : 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(data => {
				this.setState({
					events: new Array(data)
				});
			})
			.catch(error => console.error('Error:', error));
	}

	componentDidMount () {
		this.getEvents();
	}
	render(){

      	return(
      		<div>
      			<h1>My Timeline</h1>
      			<Node items={this.state.events}/>
      		</div>);
	}
}

class Node extends React.Component{
	render(){
		return(
			<div>
				{
					this.props.items.map((item) => {
						return <ul>
							{item.map(trip =>	{
								return <li>
									{trip.id}
									<ul>
										{trip.destinations.map(dest => {
											return <li>{dest}</li>;
										})}
									</ul>
								</li>;
							})}
						</ul>;
					})
				}
			</div>
		);

	}
}


ReactDOM.render(<Timeline />, document.getElementById('app'));

export default Timeline;
