import React from "react";
// import Link from "./Link";
import logo from "./logo192.png";
import Squar from "./Squar";

function ContentPage() {
  return (
    <div className="contentpage">
      <div className="logo f-2-v">
        <img src={logo} alt="" />
        College Assistant
      </div>
      <div className="grid-3">
      <Squar link="مبادئ المحاسبة" title="مبادئ المحاسبة" letter="م أ" />
        <Squar link="التسويق" title="ادراة التسويق" letter="أ ت" />
        <Squar link="الاقتصاد" title="علم ألاقتصاد" letter="ع أ" />
        
        <Squar link="مبادئ المحاسبة" title="مبادئ المحاسبة" letter="م أ" />
        <Squar link="التسويق" title="ادراة التسويق" letter="أ ت" />
        <Squar link="الاقتصاد" title="علم ألاقتصاد" letter="ع أ" />
      </div>
    </div>
  );
}

export default ContentPage;
