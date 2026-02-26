
export const initialState = {
  total: 0,
  products: [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        products: action.payload
      };

    case "increment":
      return {
        ...state,
        products: action.payload
      };

    case "decrement":
      return {
        ...state,
        products: action.payload
      };  

    case "remove":
      return {
        ...state,
        products: action.payload
      };

    case "update":
      return {
        ...state,
        total: action.payload
      };

      case "clear":
      return {
        total: 0,
        products: []
      };

    default:
      throw Error("Cannot match case in Reducer");
  }
};

export default storeReducer;