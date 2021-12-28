import React,{useState, useEffect} from 'react'

export const List = ({ getItems }) => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        setItems(getItems())
        console.log('update');
    },[getItems])
    return (
        items.map(item => <div key={item}>{item}</div>)
)

}