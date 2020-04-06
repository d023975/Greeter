import React from 'react';
function App() {
	const greeting = {
		subject: 'React',
		description: 'Your component library for ...'
	};
	return (
		<div>
			<Headline {...greeting} />
		</div>
	);
}
function Headline({ subject, ...other }) {
	const Title = ({ title }) => <h1>{title}</h1>;
	const Description = ({ description }) => <p>{description}</p>;

	return (
		<div>
			<Title title={`Welcome to ${subject}`} />
			<Description {...other} />
		</div>
	);
}
export default App;
