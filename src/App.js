import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greet from './components/Greet';
import './App.css';
import store from './redux/configureStore';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
     <Routes>
       <Route path="/" element={ <Greet/> } />
     </Routes>
    </Provider>
   </BrowserRouter>
  );
}

export default App;
