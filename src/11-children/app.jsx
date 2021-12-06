export const Container = () => {
    return (
        <>
        <Children>
            <h1>hello</h1>
            <h2>world</h2>
        </Children>
            <Children right={<h1>right element</h1>} />
            <Children left={<h1>left element</h1>}/>
            </>
    )
}


 const Children = ({ children }) => {
     return (
        <>
        <div>{children}</div>
<div>{left}</div>
             <div>{right}</div>
             </>
    )
}