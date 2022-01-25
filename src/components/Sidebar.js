import React from "react";
import "./Sidebar.scss";
function Sidebar() {
  const dashboardItems = [
    {
      title: "home",
      icon: (
        <i
          className="ri-home-wifi-line"
          style={{ fontSize: 25, color: "white" }}
        ></i>
      ),
    },
    {
      title: "user",
      icon: (
        <i
          className="ri-file-user-fill"
          style={{ fontSize: 25, color: "white" }}
        ></i>
      ),
    },
    {
      title: "manager",
      icon: (
        <i
          className="ri-terminal-window-fill"
          style={{ fontSize: 25, color: "white" }}
        ></i>
      ),
    },
  ];
  return (
    <div className="sidebar">
      <div className="logo">
        <i
          className="ri-community-fill"
          style={{ fontSize: 45, color: "white", alignSelf: "center" }}
        ></i>
        <p>logo</p>
      </div>
      <div className="sidebar-items">
        {dashboardItems.map((item, index) => (
          <div className="item-box" key={index}>
            <div>{item.icon}</div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
