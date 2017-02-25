import React from "react";
import talk from "./talk.js";
import "./cards.css";
import back from "./../../public/back.png";

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
			<div className="content">

				<p> The FakerClow<br/> Cards </p>
				
				<div className="back">
					<img className="f" src={back} alt="back"/>
				</div>
					<div className="wrapper">
						<img src={this.state.photo}/>
						<br/>
						<h1>{this.state.persona}</h1>
						<h3>{this.state.address}
							<br/>
							{this.state.city}</h3>
						<h4>{this.state.states}</h4>
						
						<span>{this.state.phone}
							<br/>
							{this.state.mail}
						</span>
					</div>
				<button onClick={event=>this.genererCartes(event)}>Autres Cartes</button>
			</div>
			)
	}
}
export default Cards;