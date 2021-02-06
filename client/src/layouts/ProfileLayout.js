import React from "react";
import "../pages/ProfilePage/Profile.css";
import Sidebar from "../components/Sidebar.jsx/Sidebar";
import {useSelector} from 'react-redux' ;
function ProfileLayout(props) {
  const loading = useSelector(state => state.auth.loading)
  return (
    <>
      <div className="profile-container">
        <Sidebar />
         {loading ?<div>Loading ...</div> :
       props.children}
      </div>
    </>
  );
}

export default ProfileLayout;
