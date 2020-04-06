import React from 'react';
function App() {
	const greeting = {
    subject: 'React',
    description: 'Your component library for ...',
  };
	return (
		<div>
			<Headline value={{...greeting}} />
		</div>
	);
}
function Headline({ value : val }) {

  const Title = ({ title }) => <h1>{title}</h1>;
  const Description = ({ description }) => <p>{description}</p>;

	return (
    <div>
      <Title title={`Welcome to ${val.subject}`} />
      <Description description={val.description} />
    </div>
  
  );
}
export default App;
