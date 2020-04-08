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

export class Greeter2 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			phrase: 'Hello',
			name: 'World'
		};

		this.nameRef = React.createRef();
	}

	greet = () => {
		alert(`${this.state.phrase}, ${this.state.name}`);
	};

	clear = () => {
		this.setState({
			phrase: '',
			name: ''
		});

		this.nameRef.current.focus();
	};

	render() {
		const buttonDisabled = !(this.state.phrase && this.state.name);

		return (
			<div>
				<h1>{this.props.title}</h1>
				<input
					value={this.state.phrase}
					onChange={(e) => this.setState({ phrase: e.target.value })}
					ref={this.nameRef}
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
		this.originalTitle = document.title;
		document.title = `Greeting for ${this.state.name}`;
	}

	componentDidUpdate(_prevProps, prevState) {
		if (prevState.name !== this.state.name) {
			document.title = `Greeting for ${this.state.name}`;
		}
	}

	componentWillUnmount() {
		document.title = this.originalTitle;
	}
}
