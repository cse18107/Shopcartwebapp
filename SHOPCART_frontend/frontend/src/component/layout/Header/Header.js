import React from "react";
import { Link } from "react-router-dom";



const Header = (props) => {

  return (
    <nav class="header__main-nav">
            <input type="checkbox"/>
            <div class="header__main-nav--hamburger">
                <div></div>
            </div>
            <div class="header__main-nav--menu">
                <div>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            {!props.isLoggedIn && <li><Link to="/login">Log In</Link></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  );
};

export default Header;
