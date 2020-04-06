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
function Headline({ subject, description }) {
	const Title = ({ title }) => <h1>{title}</h1>;
	const Description = ({ description }) => <p>{description}</p>;

	return (
		<div>
			<Title title={`Welcome to ${subject}`} />
			<Description description={description} />
		</div>
	);
}
export default App;
