export const reducerGetCategory = (state, action) => {
  switch (action.type) {
    case "GETCATEGORY":
      return action.payload
      case "UNMOUNTCATEGORY":
        return []
    default:
      return state;
  }
};


export const reducerChart = (state, action) => {
  switch (action.type) {
    case "GETADDRESS7DAY":
      return action.payload.getAddress7DeyForChart
    case "GETUSERLENGTH":
      return action.payload.getUsersLength
    case "GETUSER7DAY":
      return action.payload.getUsers7DeyForChart
    case "GETADDRESS1YEAR":
      return action.payload.getAddress1YearsForChart
    default:
      return state;
  }
};
