const pizzaOrder = (state=[], action) => {
    if (action.type === 'ADD_PIZZA') {
        let name = action.payload.name;
        let price = action.payload.price;
        let id = action.payload.id;

        let pizzaObject = {name: name, price: price, id: id};

        return ([...state, pizzaObject]) }
    // } else if (action.type === 'REMOVE_PIZZA') {

    //     state = [];

    //     for (let i=0; state.length; i++ ) {
    //         if (action.payload.id !== state[i].id) {
    //             state.push(state[i]);
    //         }
    //     }

    //     return state;
    // }

    return state;
}

export default pizzaOrder;
