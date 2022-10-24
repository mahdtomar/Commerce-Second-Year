// import logo from './logo.svg';
import './App.css';
import MainPage from './components/main page/MainPage';
import { Route} from 'react-router-dom'
import Economy from './components/economy/Economy';
// import s
function App() {
  return (
    <div className="App">
      {/* <Switch> */}
      <Route path='/' component={MainPage}></Route>
      <Route path='/economy' component={Economy}></Route>
        {/* <MainPage/> */}
      {/* </Switch> */}
    <MainPage/>
    </div>
  );
}

export default App;
