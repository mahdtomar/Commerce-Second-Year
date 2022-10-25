// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import  from './Home';
// import About from './About';
import MainPage from "./components/main page/MainPage";
import Economy from "./components/economy/Economy";
import PrinciplesOfManagementalAccounting from "./components/principles of financial accounting/PrinciplesOfFinancialAccounting";
import Marketing from "./components/marketing managment/Marketing";
import Nav from "./components/main page/Nav";
import SideBar from "./components/main page/SideBar";
import Chapters from "./components/muliUsePages/Chapters";
// import ContentPage from './components/main page/ContentPage';
let introduction =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias fuga corporis id iure sapiente ullam ut eum fugiat facere, recusandae nihil quis voluptatum, numquam, animi provident illo perspiciatis. Deleniti, temporibus!";
let list = ["الفصل الأول", "الفصل الثاني", "الفصل الثالث"];

function App() {
  return (
    <>
      {/* <MainPage/> */}
      <Nav></Nav>
      <div className="screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SideBar content={introduction} />
                <MainPage />
              </>
            }
          />
          <Route
            path="/الاقتصاد"
            element={
              <>
                <SideBar content={<Chapters list={list}></Chapters>} />
                <Economy />
              </>
            }
          />
          <Route
            path="/مبادئ المحاسبة"
            element={
              <>
                <SideBar className='chapters-bar' content={<Chapters  class={'chapter-link'}  list={list}></Chapters>} />
                <PrinciplesOfManagementalAccounting list={list} />
              </>
            }
          />
          <Route path="/التسويق" element={<Marketing />} />
        </Routes>
      </div>
      {/* <div>hello react</div> */}
    </>
  );
}

export default App;
