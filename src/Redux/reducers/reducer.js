const defaultStore = {
  data: [],
};
export const allReducer = (state = defaultStore, action) => {
    switch (action.type) {
    case "ADD_MANY":
        return { data: [...state.data, action.payload]
        };
    case "ADD":
      return { data: [...state.data, action.payload] };
    case "REMOVE":
        return {...state, data: state.data.filter((item) => item.id !== action.payload) };

    case "UPDATE":
      return { data: action.payload };

    default:
      return state;
  }
};

export const addManyTodo = (payload) => ({
  type: "ADD_MANY",
  payload
});