import { useState } from "react";
import "./Header.css";



function Header() {

  const [Menu,setMenu ] = useState("Header-res");
  const [Li,setLi] = useState("display-hide")
  
let myfunc = () =>{
    if(Menu === "Header-res")
    {
      setMenu("");
      setLi("")
    }
    else{
      setMenu("Header-res")
      setLi("display-show")
    }

}

  return (
    <div className="head-div" id="nav">
      <div className="Header">
        <div>LOGO</div>
        <ul className={Li}>
          <li>
            <a href="/" className="item1">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="item2">
              About
            </a>
          </li>

          <li>
            <a href="/" className="item4">
              Project
            </a>
          </li>

          <li>
            <a href="/" className="item4">
              Transportation
            </a>
          </li>
          <li>
            <a href="/" className="item3">
              ContactUs
            </a>
          </li>
          <li>
          <a href="javascript:void(0)" className="icon" onClick={myfunc}><i class="fa-sharp fa-solid fa-bars"></i></a>
          </li>
        </ul>
      </div>
      <div className={Menu}>
      <ul>
          <li>
            <a href="/" className="item1">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="item2">
              About
            </a>
          </li>

          <li>
            <a href="/" className="item4">
              Project
            </a>
          </li>

          <li>
            <a href="/" className="item4">
              Transportation
            </a>
          </li>
          <li>
            <a href="/" className="item3">
              ContactUs
            </a>
          </li>
          </ul>
      </div>
    </div>
  );
}

export default Header;
