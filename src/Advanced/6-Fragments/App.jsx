import React,{Fragement} from 'react'
const Columns = () => {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  
}
export const App = ({items}) => {
  return (
    <dl>
      {items.map((item) => (
  
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}