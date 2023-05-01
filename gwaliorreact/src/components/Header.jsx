import { useState } from "react";
import "./Header.css";



function Header() {

  const [Menu,setMenu ] = useState("Header-resp");
  const [Li,setLi] = useState("display-hide")
  const [Icon,setIcon] = useState("fa-sharp fa-solid fa-bars")
  
let myfunc = () =>{
    if(Menu === "Header-resp")
    {
      setMenu("Header-res");
      setLi("")
      setIcon("fa-sharp fa-solid fa-circle-xmark")

      
    }
    else{
      setMenu("Header-resp")
      setLi("display-hide")
      setIcon("fa-sharp fa-solid fa-bars")
    }

}

  return (
    <div className="head-div" id="nav">
      <div className="Header">
        <div>LOGO</div>
        <ul >
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
          <a href="javascript:void(0)" className="icon" onClick={myfunc}><i class={Icon}></i></a>
          </li>
        </ul>
      </div>
      <div className={Menu}>
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
          </ul>
      </div>
    </div>
  );
}

export default Header;
