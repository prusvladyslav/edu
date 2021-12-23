import React,{useRef} from 'react'

export const App = () => {
    const input = useRef(null);
    const fileInput = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(input.current.value,fileInput.current.files[0].name)
        console.log(fileInput.current.files[0].name);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                type
                <input type="text" ref={input} />
            </label>
          <input type="file" ref={fileInput} />
            <input type="submit" value='Submit'  />
       </form>
   )
}