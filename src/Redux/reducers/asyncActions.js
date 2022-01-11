import {addManyTodo} from './reducer'
export const fetchTodos = () => {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then(json => dispatch(addManyTodo(json)));
    }
}