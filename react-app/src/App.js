function App(props) {
  const colorStyle = {
    color: props.color,
    fontSize: props.size,
  };

  return <div style={colorStyle}>Hello World!</div>;
}
export default App;
