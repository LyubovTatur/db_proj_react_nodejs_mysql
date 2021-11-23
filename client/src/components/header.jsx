import React from 'react';
import glassesPic from '../images/3d_glasses.png'
import searchLogo from '../images/search_logo.png'
import userLogo from '../images/user.png'
import {Route, Routes} from "react-router-dom";
import Home from '../pages/main.js'


function Switch(props) {
    return null;
}

const Header = () => {
    return (
        <header>
            <div className="logo_pic">
                <img src={glassesPic} alt="очки" id="logo"/>
            </div>
            <div className="brand">
                Фильмосайтик
            </div>

            <div className="search_input">
                <input type="search" id="header_search"/>
                <img src={searchLogo} alt="поиск" id="search_logo" />
            </div>

            <div className="user_profile" href="login.html">

                <img src={userLogo} alt="юзер" id="user"/>

                <div className="username">usernamedddddddddd</div>
            </div>


        </header>
    );
};

export default Header;