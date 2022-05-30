import {createStore,applyMiddleware} from 'redux'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../redux/rootReducer'    
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {persistStore,persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';
// const persistConfig={
//     key:'p1',
//     storage
// }
// const persistreducer=persistReducer(persistConfig,rootReducer)

const store=createStore(rootReducer, applyMiddleware(thunk))
// const persiststore=persistStore(store)
export default store
// export {persiststore}   