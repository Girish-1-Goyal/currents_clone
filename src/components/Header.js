import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Switch from "@material-ui/core/Switch";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "../features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Header({onClick}) {
  const dispatch = useDispatch();
  const logOutApp = () => {
    dispatch(logout());
    auth.signOut(); 
  }
  const user = useSelector(selectUser);
  return (
    <div className="Header_main">
      <div className="Header_iconBar">
        <MenuIcon className="header_menuIcon" />
        <div className="menu_img">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Google_Currents_2019_Logo.svg/512px-Google_Currents_2019_Logo.svg.png"
            className="Header_img"
          />
          <h3>Currents</h3>
        </div>
        <div className="Header_searchBar">
          <h3>Home</h3>
          <div className="SearchBar_Header">
            <SearchIcon className="Search_icon" />
            <input type="text" placeholder="Search Currents" />
            <ExpandMoreIcon className="expand_icon" />
          </div>
          <Switch />
        </div>
      </div>
      <div className="right_div">
        <AppsIcon className="app_header" />
        <Avatar
          className="app_avatar"
          src="https://previews.123rf.com/images/sarahdesign/sarahdesign1410/sarahdesign141000851/32210992-logout-icon.jpg"
          onClick={logOutApp} />
      </div>
    </div>
  );
}

export default Header;
