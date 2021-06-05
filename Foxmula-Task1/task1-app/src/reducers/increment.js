const initialState = 0;

const plusNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

export default plusNumber;
