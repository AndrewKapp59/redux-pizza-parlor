const customerList  = (state = [], action) => {
    if (action.type ===  'ADD_NEW_CUSTOMER' ){
      return action.payload
    }
      return state;
  }

export default customerList;