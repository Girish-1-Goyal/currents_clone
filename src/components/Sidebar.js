import React from 'react';
import SidebarOptions from './SidebarOptions';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LabelIcon from "@material-ui/icons/Label";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleIcon from "@material-ui/icons/People";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import "./Sidebar.css";

export default function Sidebar() {

    const otherItem = (topic) => (
        <div className="other_side">
            <p>{topic}</p>
        </div>
    )

    return (
      <div className="Sidebar_all">
        <div className="side_option">
          <div className="Home_icon">
            <SidebarOptions Icon={HomeRoundedIcon} title="Home" color="blue" />
          </div>
          <SidebarOptions Icon={LabelIcon} title="Tags" color="grey" />
          <SidebarOptions
            Icon={GroupWorkIcon}
            title="Communities"
            color="grey"
          />
          <SidebarOptions
            Icon={AccountCircleIcon}
            title="Profile"
            color="grey"
          />
          <SidebarOptions Icon={PeopleIcon} title="People" color="grey" />
          <SidebarOptions
            Icon={NotificationsIcon}
            title="Notification"
            color="grey"
          />
        </div>
        <div className="middle_side">
          <h3>STREAMS</h3>
          <div className="middle_opt">
            <SidebarOptions
              Icon={AllInboxIcon}
              title="All posts"
              color="grey"
            />
            <p></p>
          </div>
        </div>
        <div className="other_bar">
          {otherItem("Settings")}
          {otherItem("Send feedback")}
          {otherItem("Help")}
        </div>
      </div>
    );
}
