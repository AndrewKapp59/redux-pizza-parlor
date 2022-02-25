
const pizzaList = (state = [], action) => {
    // TODO - set book list with data from server
    if (action.type === 'SET_PIZZA_LIST') {
      
      return action.payload
    }
    return state;
  }

export default pizzaList;