import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
	return (
		<div className="App">
			<PersonCard firstName="Jane" lastName="Doe" Age={45} hairColor="Black" />

			<PersonCard
				firstName="John"
				lastName="Smith"
				Age={88}
				hairColor="Brown"
			/>
			<PersonCard
				firstName="Millard"
				lastName="Fillmore"
				Age={50}
				hairColor="Brown"
			/>
			<PersonCard
				firstName="Maria"
				lastName="Smith"
				Age={62}
				hairColor="Brown"
			/>
		</div>
	);
}

export default App;
