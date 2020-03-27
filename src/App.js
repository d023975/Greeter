import React from "react";

export default function Greeter(props) {
  const [greeting, setGreeting] = React.useState("");

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
        onChange={e => {
          setGreeting(e.target.value);
          console.log(e.target.value);
          console.log(!greetingInvalid ? `valid` : `invalid`);

        }}
      />
      <span style={{ color: !greetingInvalid ? `green` : `red` }}>
        {charsRemaining}
      </span>
      <button disabled={greetingInvalid} onClick={handleGreetClick}>
        Greet
      </button>
    </div>
  );
}
