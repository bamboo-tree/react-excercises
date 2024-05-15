import "./App.css";
import { Text, Button, Paragraph } from "./ui";

function App() {
	const handleClick = () => {
		return alert("Button clicked!");
	};
	return (
		<>
			<Text>My epic text component</Text>
			<Button onClick={handleClick} label="Click me" />
			<Paragraph>Paragraph italic</Paragraph>
		</>
	);
}

export default App;
