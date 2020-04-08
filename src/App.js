import React from 'react';

export default function Greeter(props) {
	const [ greeting, setGreeting ] = React.useState('');

	function handleGreetClick() {
		alert(`Hello, ${greeting}`);
	}

	const charsRemaining = props.maxLength - greeting.length;
	const greetingInvalid = greeting.length === 0 || charsRemaining < 0;

	document.title = 'My Own Title'; //Overridden by the class below since it is rendered after the Greeter

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

export class Greeter2 extends React.Component {
	//always extend React.Component , component name == class name, or use React.PureComponent, see below
	// Hooks cannot be used in classes !!! https://reactjs.org/docs/hooks-reference.html
	constructor(props) {
		//constructor is not obligatory
		super(props); // you MUST use super if you use a constructor

		// this.state = {        // setState MUST NOT be used in the constructor
		// 	phrase: 'Hello',
		// 	name: 'World'
		// };

		this.nameRef = React.createRef(); // Create reference object for a DOM-Element
	}

	shouldComponentUpdate(newState, newProps) {
		return true; //rendering can be suppressed here for performance reasons , return false or use
		//React.PureComponent, which only renders on properties changes
	}

	state = {
		// state can also be initialized here as class property
		// if it depends on props initialization within constructor may be more suitable
		phrase: (() => {
			console.log('Props ' + this.props.title);
			return 'First Hello';
		})(), // is set before the  constructor execution
		name: 'World'
	};

	//the instance variaple props / this.props contains the properties
	greet = () => {
		alert(`${this.state.phrase}, ${this.state.name}`); //access the state via this.state.KEY
	};

	clear = () => {
		this.setState({
			//change the state , with hooks React.useState is used, which "creates" the setter
			phrase: '', //calling setState triggers rerendering of the component
			name: '' //only the values you pass into setState are being changed the other remain unchanged
		}); //you can also introduce new values if you like

		this.nameRef.current.focus(); //set focus to the  currently referenced DOM object
	};

	render() {
		// presentation logic
		const buttonDisabled = !(this.state.phrase && this.state.name);

		return (
			//this in the handlers must be the this of the component classes instance
			//this in the JSX expression is evaluated when render() is invoked,
			// so it is the this of the component classes instance
			<div>
				<h1>{this.props.title}</h1>
				<input
					value={this.state.phrase} //access the state via this.state.KEY
					onChange={(e) => this.setState({ phrase: e.target.value })}
					ref={this.nameRef} // assign DOM object reference to the input element
				/>
				<input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
				<button onClick={this.greet} disabled={buttonDisabled}>
					Greet
				</button>
				<button onClick={this.clear}>Clear</button>
			</div>
		);
	}

	componentDidMount() {
		//after rendering Comonent is hooked into the DOM
		this.originalTitle = document.title;
		document.title = `Greeting for ${this.state.name}`;
	}

	componentDidUpdate(_prevProps, prevState) {
		//after rerendering Comonent is hooked into the DOM
		if (prevState.name !== this.state.name) {
			document.title = `Greeting for ${this.state.name}`;
		}
	}

	componentWillUnmount() {
		//cleanup when component is unmounted
		document.title = this.originalTitle;
	}
}
