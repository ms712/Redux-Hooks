import { createStore ,applyMiddleware} from "redux";
import rootReducer from "../Components/Redux/Reducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

export default createStore(rootReducer ,composeWithDevTools(
    applyMiddleware(logger)));