import React, { Component } from "react";

export class PersonCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Age: this.props.Age,
		};
	}

	render() {
		const { lastName, firstName, Age, hairColor } = this.props;
		//const [ageState, setAgeState] = useState(Age);
		const incrementAge = () => this.setState({ Age: this.state.Age + 1 });
		return (
			<div>
				<h1>
					{lastName}, {firstName}
				</h1>
				<p>Age: {this.state.Age}</p>
				{/* <p>Age: {Age}</p> */}

				<p>Hair Color: {hairColor}</p>

				<button onClick={incrementAge}>
					Birthday Button for {firstName} {lastName}
				</button>
			</div>
		);
	}
}

export default PersonCard;
