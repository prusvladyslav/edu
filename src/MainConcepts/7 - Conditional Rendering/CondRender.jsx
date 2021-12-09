const CondRender = () => {
  const tickState = useState(0);
  const tick = tickState[0];
  const setTick = tickState[1];
  const element = <h1>hi</h1>;

  if (tick % 2 === 0) {
    return (
      <button
        onClick={() => {
          setTick(tick + 1);
        }}
      >
        +tick
      </button>
    );
  } else
    return (
      <>
        {element}
        {props.name}
        <Clock />
        <h1>{tick}</h1>
        <button
          onClick={() => {
            setTick(tick + 1);
          }}
        >
          +tick
        </button>
        {tick % 2 === 0 > 0 && <h2>{tick}</h2>}
        {tick !== 0 ? (
          <h1>tick is more than 0</h1>
        ) : (
          <h1>tick is equal to 0</h1>
        )}
      </>
    );
};
