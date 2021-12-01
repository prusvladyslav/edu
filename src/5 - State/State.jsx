function App(props) {
  const tickState = useState(0);
  const tick = tickState[0];
    const setTick = tickState[1];
    useEffect(() => {
      document.title = `You clicked ${tick} times`;
    });
    useEffect(() => {
     console.log(`component did mount`);
    },[]);
    return (
      <>
        <h1>{tick}</h1>
        <button
          onClick={() => {
            setTick(tick + 1);
          }}
        >
          +tick
        </button>
      </>
    );
}
