import {createStore,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import reducers from '../reducers/index'

export default () => {
	const store = createStore(reducers,{},applyMiddleware(thunk));

	return store;
}


