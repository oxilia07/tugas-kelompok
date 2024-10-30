import logo from "./logo.svg";

function App() {
  return (
    /* JSX */
    <div>
      <h1>Hello React</h1>
      <Hello />
      <World/>
    </div>
  );
};

const Hello = () => {
  return <h2>Hello World</h2>;
};

const World = () => {
  return <h3>Hello World 2</h3>;
};

export default App;
