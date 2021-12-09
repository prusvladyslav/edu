const Props = ({ name }) => {
  return <p>Hi,{name}</p>;
};

const vasya = <Props name="Vasya" />;
const App = () => {
  return <Props name="Ivan" />;
};
ReactDOM.render(<>{vasya}</>, document.getElementById("root"));
