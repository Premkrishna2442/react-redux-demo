import { Provider } from 'react-redux';
import store from './components/redux/store';
import CakeContainer from './components/CakeContainer';
import CakeHook from './components/CakeHook';
function App() {
  return (
    <Provider store={store  }>
      <div className="App">
        <CakeHook/>
      <CakeContainer/>
    </div>
    </Provider>
  );
    
}

export default App;
