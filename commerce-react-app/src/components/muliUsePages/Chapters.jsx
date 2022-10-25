import React from "react";
import { Link } from "react-router-dom";

function Chapters(props) {
  // for(let i=0;i<props.list.length;i++){
  return (
    <>
      {props.list.map((i) => {
        if (props.class) {
          console.log(props.name);
          return (
            <Link class={props.class} link={i} key={i}>
              {i}
            </Link>
          );
        }
        return (
          <Link name={i} key={i}>
            {i}
          </Link>
        );
      })}
    </>
  );
  // }
}

export default Chapters;
