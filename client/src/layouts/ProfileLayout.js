import React from "react";
import "../pages/ProfilePage/Profile.css";
import Sidebar from "../components/Sidebar.jsx/Sidebar";
function ProfileLayout(props) {
  return (
    <>
      <div className="profile-container">
        <Sidebar />
        <div className="profile-area">{props.children}</div>
      </div>
    </>
  );
}

export default ProfileLayout;
