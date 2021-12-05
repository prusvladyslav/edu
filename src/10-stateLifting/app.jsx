import React,{useState} from 'react';
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
export const Lift = () => {
    const [temperature, setTemperature] = useState(0)
    return (
        <>
        <input type="text" value={temperature} onChange={((e) => setTemperature(e.target.value))} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
       </>
    )
}