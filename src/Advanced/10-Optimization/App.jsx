import React,{useState} from 'react'
const ListOfWords = ({words}) =>{
  
    return <div>{words.join(",")}</div>;
  
}

export const WordAdder = () => {
     const [words,setWords] = useState(["marklar"])
    
 const handleClick = () => {
    // плохой код 
    // const words = words;
    // words.push("marklar");
    // setWords(words)
     setWords(prevState=> [...prevState,'marklar'])
  }


    return (
      <div>
        <button onClick={(()=>handleClick())} />
        <ListOfWords words={words} />
      </div>
    );

}
