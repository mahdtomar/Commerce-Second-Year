// import logo from './logo.svg';
import './App.css';
import {  Route, Routes  } from 'react-router-dom';
// import  from './Home';
// import About from './About';
import MainPage from './components/main page/MainPage'
import Economy from './components/economy/Economy'
import PrinciplesOfManagementalAccounting from './components/principles of financial accounting/PrinciplesOfFinancialAccounting';
import Marketing from './components/marketing managment/Marketing'
function App() {
  return (
    <>
    {/* <MainPage/> */}
    {/* <div>hello react</div> */}
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/الاقتصاد' element={<Economy/>}/>
        <Route path='/مبادئ المحاسبة' element={<PrinciplesOfManagementalAccounting/>}/>
        <Route path='/التسويق' element={<Marketing/>}/>
      </Routes>
    
    </>
  );
}

export default App;
