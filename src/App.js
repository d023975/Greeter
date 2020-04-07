import React from 'react';

export default function Greeter(props) {
	const [ greeting, setGreeting ] = React.useState('');

	function handleGreetClick() {
		alert(`Hello, ${greeting}`);
	}

	const charsRemaining = props.maxLength - greeting.length;
	const greetingInvalid = greeting.length === 0 || charsRemaining < 0;

	return (
		<div>
			Greeting:
			<input
				className={!greetingInvalid ? `valid` : `invalid`}
				value={greeting}
				onChange={(e) => {
					setGreeting(e.target.value);
					console.log(e.target.value);
					console.log(!greetingInvalid ? `valid` : `invalid`);
				}}
			/>
			<span style={{ color: !greetingInvalid ? `green` : `red` }}>{charsRemaining}</span>
			<button disabled={greetingInvalid} onClick={handleGreetClick}>
				Greet
			</button>
		</div>
	);
}

export  function Counter() {
	const [ count, setCount ] = React.useState(0);

	function buttonClicked(label) {
		if (label === 'Increase') {
			setCount(count + 1);
		} else {
			setCount(count - 1);
		}
  }
  
  return <>
    <Button label="Increase" onButtonClick={buttonClicked} count = {count} />
    <Button label="Decrease" onButtonClick={buttonClicked} count = {count}/>
  </>
}

function Button({label, onButtonClick, count}){
  return <button
            onClick={() => onButtonClick(label)}>
              {label + " : " + count}
            </button>
}

 