const Render = () => {

const listItem = ['abd','bcd','asd']
    const ul = listItem.map((item) =>
        <li key={Date.now()}>{item}</li>
    )
    return (
        <ul>{ul}</ul>
    )
}