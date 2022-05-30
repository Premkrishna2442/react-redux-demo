import { Provider } from 'react-redux';
import store,{persiststore} from './components/redux/store';
import CakeContainer from './components/CakeContainer';
import CakeHook from './components/CakeHook';
import IceHook from './components/IceContainer';
// import {PersistGate} from 'redux-persist/integration/react'
import UserComponent from './components/UserComponent';
import Userhook from './components/Userhook';
function App() {
  return(
    <Provider store={store  }>
        {/* <PersistGate persistor={persiststore}> */}
      <div className="App">
          {/* <CakeHook/>
      <CakeContainer/>
      <IceHook/>
         */}
         <UserComponent/>
         <Userhook/>
    </div>
      {/* </PersistGate> */}
    </Provider>
  );
    
}

export default App;
