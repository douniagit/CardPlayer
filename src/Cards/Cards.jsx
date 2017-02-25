import React from "react";
import talk from "./talk.js";

class Cards extends React.Component{
	
	State = {
		// talk:null
	};

	componentWillMount(){
		this.genererCartes();
	}


	genererCartes = event=>{
		// convertir l'objet en array
		const keyArray = Object.keys(talk);
		//une Cartes au hasard
		const randomKey = keyArray[Math.floor(Math.random()*keyArray.length)];
		this.setState(talk[randomKey]);
	};

	render(){
		//console.log(talk);
		

		return(
			<div className="Content">
				<h1>{this.state.citation}</h1>
				<span>{this.state.auteur}</span>
				<button onClick={event=>this.genererCartes(event)}>autre Cartes</button>
			</div>
			)
	}
}
export default Cards;