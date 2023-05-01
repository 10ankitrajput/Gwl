import "./Header.css";

function Header() {

let myfunc = () =>{
  let mydiv = document.getElementById("nav");
  if(mydiv.className === "head-div"){
    mydiv.className += " head-div-res";
    alert("Hello")
  }else{
    mydiv.className = "head-div"
  }
  
}

  return (
    <div className="head-div" id="nav">
      <div className="Header">
        <div>LOGO</div>
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
          <li>
          <a href="javascript:void(0)" className="icon" onClick={myfunc}><i class="fa-sharp fa-solid fa-bars"></i></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
