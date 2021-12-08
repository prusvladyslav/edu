import React,{useState} from 'react'

export const Form = () => {
    const [choosed, setChoosed] = useState()
    
    const handleChange = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
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
        <input type="text" onChange={handleChange} />
        <input type="checkbox" onChange={handleChange} />
      </form>
    );
}