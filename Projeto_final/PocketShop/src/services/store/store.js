import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from '../reducers/prodCart'
const store =  createStore(ShopApp,applyMiddleware(thunkMiddleware));
export default store;