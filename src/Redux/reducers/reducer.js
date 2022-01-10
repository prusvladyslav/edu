const defaultStore = {
  data: [],
};
export const allReducer = (state = defaultStore, action) => {
    switch (action.type) {
    case "ADD_MANY":
      return {...state, data: [ action.payload] };
    case "ADD":
      return { data: [...state.data, action.payload] };
    case "REMOVE":
      return state.data.filter((item) => item.id !== state.payload);

    case "UPDATE":
      return { data: action.payload };

    default:
      return state;
  }
};
