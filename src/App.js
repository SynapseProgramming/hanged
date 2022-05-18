import logo from "./logo.svg";
import {useLocation} from "react-router-dom";
import "./App.css";

function App(props) {
	const formData = useLocation();
	console.log(formData);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Text from form: {formData.state}</p>
			</header>
		</div>
	);
}

export default App;
