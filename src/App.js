import React from 'react';
function App() {
  const greeting = 'Hello Function Component!';
  return <Headline value={greeting} />;
}
function Headline({value}) { //destructuring of pros
  return <h1>{value}</h1>;
}
export default App;
