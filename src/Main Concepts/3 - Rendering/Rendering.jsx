const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setDate(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <>
      <h1>clock</h1>
      <h2>{date}</h2>
    </>
  );
};
ReactDOM.render(
  <>
    <Clock />
  </>,
  document.getElementById("root")
);

React.createElement(div);
