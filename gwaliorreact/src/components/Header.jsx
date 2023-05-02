/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import { useState } from "react";
import "./Header.css";



function Header() {

  const [Menu,setMenu ] = useState("Header-resp");
  const [Li,setLi] = useState("display-hide")
  const [Icon,setIcon] = useState("fa-sharp fa-solid fa-bars")
  const [Social,setSocial] = useState("display-hide");
  
  
let myfunc = () =>{
    if(Menu === "Header-resp")
    {
      setMenu("Header-res");
      setLi("")
      setIcon("fa-sharp fa-solid fa-circle-xmark")
      setSocial("Social-Media")
      
      

      
    }
    else{
      setMenu("Header-resp")
      setLi("display-hide")
      setIcon("fa-sharp fa-solid fa-bars")
      setSocial("display-hide")
      
      
    }

}

  return (
    <div className="Head-div" id="nav">
      <div className="Header">
        <div className="logo"><h2>Gwalior</h2></div>
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
              Transport
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
        <div className="User">
          <a href="/"><i class="fa-solid fa-user"></i>&nbsp;Sign in</a>
          <a href="/"><i class="fa-solid fa-user-plus"></i>&nbsp;Sign up</a>

        </div>
      </div>
      <div className={Menu}>
      <ul className={Li}>
          <li className="Res-li">
            <a href="/" className="item1">
              Home
            </a>
          </li>
          <li className="Res-li">
            <a href="/" className="item2">
              About
            </a>
          </li>

          <li className="Res-li">
            <a href="/" className="item4">
              Project
            </a>
          </li>

          <li className="Res-li">
            <a href="/" className="item4">
              Transport
            </a>
          </li>
          <li className="Res-li">
            <a href="/" className="item3">
              ContactUs
            </a>
          </li>
          </ul>
          <ul className={Social}>
            <li><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></li>   
            <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a></li>
          </ul>
      </div>
    </div>
  );
}

export default Header;
