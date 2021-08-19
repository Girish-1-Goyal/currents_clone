import React from 'react';
import "./SidebarOptions.css";

function SidebarOptions({Icon, title, color}) {
    return (
        <div className="Sidebar_options">
            {Icon && <Icon style={{color:color}} className="side_icon" />}
            <p style={{color:color}}>{title}</p>
        </div>
    )
}

export default SidebarOptions
