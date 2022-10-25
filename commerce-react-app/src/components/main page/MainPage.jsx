import React from "react";
import ContentPage from "./ContentPage";
import Nav from "./Nav";
import SideBar from "./SideBar";
import './sass/mainPage.css'
function MainPage() {
  return (
    <>
      <Nav></Nav>
      <div className="screen">
        <SideBar />
        <ContentPage />
      </div>
    </>
  );
}

export default MainPage;
