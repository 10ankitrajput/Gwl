/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import { useState } from "react";
import "./Header.css";



function Header() {

  const [Menu,setMenu ] = useState("Header-resp");
  const [Li,setLi] = useState("display-hide")
  const [Icon,setIcon] = useState("fa-sharp fa-solid fa-bars")
  const [Social,setSocial] = useState("display-hide");
  const [Res,setRes] = useState("dropdown-content")
  
  
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
          <li className="dropdown item1">
            <a href="/" className="">
              Home
            </a>
          </li>
          <li  className="dropdown">
            <a href="/" className="item2">
              About <i class="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-content">
              <li><a href="/">Influencer</a></li>
              <li><a href="/">Social Media</a></li>
              <li><a href="/">Advertisement</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="/" className="item4">
              Project <i class="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-content">
              <li><a href="/">Ongoing Project</a></li>
              <li><a href="/">Upcoming Project</a></li>
              <li><a href="/">Previous Project</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="/" className="item4">
              Transport <i class="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-content">
              <li><a href="/">Railway</a></li>
              <li><a href="/">Airport</a></li>
              <li><a href="/">Local Transport</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="/" className="item3">
              Other <i class="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-content">
              <li><a href="/">Traffic Services</a></li>
              <li><a href="/">Our Partner</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </li>
          <li>
          <a href="javascript:void(0)" className="icon" onClick={myfunc}><i class={Icon}></i></a>
          </li>
        </ul>
        <div className="User">
          <a href="/" className="SignIn"><i class="fa-solid fa-user"></i>&nbsp;Sign in</a>
          <a href="/" className="SignUp"><i class="fa-solid fa-user-plus"></i>&nbsp;Sign up</a>

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
            <ul className={Res}>
              <li><a href="/">Influencer</a></li>
              <li><a href="/">Social Media</a></li>
              <li><a href="/">Advertisement</a></li>
            </ul>
          </li>

          <li className="Res-li">
            <a href="/" className="item3">
              Project
            </a>
            <ul className="dropdown-content">
              <li><a href="/">Ongoing Project</a></li>
              <li><a href="/">Upcoming Project</a></li>
              <li><a href="/">Previous Project</a></li>
            </ul>
          </li>

          <li className="Res-li">
            <a href="/" className="item4">
              Transport
            </a>
            <ul className="dropdown-content">
              <li><a href="/">Railway</a></li>
              <li><a href="/">Airport</a></li>
              <li><a href="/">Local Transport</a></li>
            </ul>
          </li>
          <li className="Res-li">
            <a href="/" className="item5">
              Other
            </a>
            <ul className="dropdown-content">
              <li><a href="/">Traffic Services</a></li>
              <li><a href="/">Our Partner</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </li>
          <li className="Res-li">
            <a href="/" className="item6">
              Sign Up
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
