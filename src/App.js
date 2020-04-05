import React from 'react';
function App() {
	const greeting = { text: 'Welcome to React' };
	return (
		<div>
			<Headline value={greeting} />
		</div>
	);
}
function Headline({ value }) {
	return <h1>{value.text}</h1>;
}
export default App;
