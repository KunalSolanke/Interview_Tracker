import React,{useEffect} from "react";
import "../pages/ProfilePage/Profile.css";
import Sidebar from "../components/Sidebar.jsx/Sidebar";
import {useSelector} from 'react-redux' ;
import {useParams,useHistory} from 'react-router-dom'
import Loading from '../components/Loading/Loading'
function ProfileLayout(props) {
  const loading = useSelector(state => state.auth.loading)
  const history = useHistory() ;
  useEffect(()=>{
     if(!localStorage.getItem("token")){
      history.push("/accounts/login")
    }
  })
  return (
    <>
      <div className="profile-container">
        <Sidebar />
         {loading ?<Loading/> :
       props.children}
      </div>
    </>
  );
}

export default ProfileLayout;
