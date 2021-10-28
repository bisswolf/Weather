import "./App.css";
import Currentdate from "./components/Currentdate";
import Api from "./components/Api";
import Container from "./components/UI/Container";

function App() {
	return (
		<div className="App">
			<div className="font">
				<p>What's the Weather?</p>
			</div>
			<Container>
				<Currentdate />
				<Api />
			</Container>
		</div>
	);
}

export default App;
