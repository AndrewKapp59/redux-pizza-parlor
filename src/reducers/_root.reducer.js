import { combineReducers } from "redux";
import pizzaList from './pizzaList.reducer';
import customerList from "./customerList.reducer";
import pizzaOrder from './pizzaOrder.reducer';
import totalCost from './totalCost.reducer';

const rootReducer = combineReducers({pizzaList, customerList, pizzaOrder, totalCost});




export default rootReducer;


