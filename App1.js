import React from 'react';
import CardList from'./CardList';
import SearchBox from'./SearchBox';
//import {robots} from './robots';
import Scroll from'./Scroll';
import  './App.css'; 

class App1 extends React.Component {
	constructor(){
		super() 
		this.state={     //definig a state
	robots:[],//instead of empty array could write robots
	searchfield:''
}
  }
  componentDidMount(){//whenever we refresh the page
  	fetch('https://jsonplaceholder.typicode.com/users')
  	.then(response=> response.json())//get data from internet//not the robots file 
  	.then(users =>this.setState({robots:users}));
  		
  	}
//this.setState({robots:robots});
  //}
  onSearchChange=(event)=>{

  	this.setState({searchfield:event.target.value})//set the state to updated one
  	 }
		render(){
			const filteredRobots=this.state.robots.filter (robots=>{
  		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  	})
			if(this.state.robots.length===0){
				return <h1>Loading</h1>
			}
			else{
				return(
		<div className='tc '>
		<h1 className="f1">RoboFriends</h1>
		<SearchBox  searchChange={this.onSearchChange}/>
	<Scroll>		

<CardList robots={filteredRobots}/>
</Scroll>
</div>
		);   

			}

		
	} 
	

}
export default App1;   