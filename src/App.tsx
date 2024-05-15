import "./App.css";
import { Text, Button } from "./ui";

function App() {
	const handleClick = () => {
		return alert("Button clicked!");
	};
	return (
		<>
			<Text>My epic text component</Text>
			<Button onClick={handleClick} label="Click me" />
		</>
	);
}

export default App;
