import React from 'react';
function App() {
	return <Headline />; // return component
}
function Headline() {
	const greeting = 'Hello Function Component!';
	return <h1>{greeting}</h1>;
}
export default App;
