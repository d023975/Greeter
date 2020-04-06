import React from 'react';
function App() {
	const greeting = { text: 'Welcome to React' };
	return (
		<div>
			<Headline value={greeting} />
		</div>
	);
}
function Headline({ value : val }) {
	return <h1>{val.text}</h1>;
}
export default App;
