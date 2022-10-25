import React from "react";
// import Lecture from "./Lecture";
// import Tile from "./Tile";
import logo from "./logo192.png";

// let text = 'hello'
function SideBar(props) {
  return (
    <div className="sidebar " >
      <img src={logo} alt="" />
      {/* <Lecture text={text}/> */}
      {/* <Tile name='التسويق'/>
    <Tile name='الاقتصاد'/>
    <Tile name='مبادئ المحاسبة'/> */}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias fuga
        corporis id iure sapiente ullam ut eum fugiat facere, recusandae nihil
        quis voluptatum, numquam, animi provident illo perspiciatis. Deleniti,
        temporibus!
      </p> */}
{props.content}
    </div>
  );
}

export default SideBar;
