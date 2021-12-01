import React,{useState} from 'react'

export const Form = () => {
    const [choosed, setChoosed] = useState()
    
    const handleChange = () => {
        setChoosed(event.target.value)
        alert(`you have choosen ${choosed}`)
    }
    return (
      <form>
        <label>
          text
          <input name="text" type="text" />
        </label>
        <select onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </form>
    );
}