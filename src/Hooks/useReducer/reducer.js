export const initialState = { count: 0 };

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
          return { count: state.count - 1 };
      case "reset":
          return {count: initialState.count}
    default:
      throw new Error();
  }
}
