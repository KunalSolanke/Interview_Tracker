import React, { useEffect } from "react";
import "../pages/ProfilePage/Profile.css";
import Sidebar from "../components/Sidebar.jsx/Sidebar";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { getProfile } from "../store/actions/auth";
import { useDispatch } from "react-redux";
function ProfileLayout(props) {
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.token) {
      history.push("/accounts/login");
    }
    (async () => {
      await dispatch(getProfile());
    })();
  }, []);
  return (
    <>
      <div className="profile-container">
        <Sidebar />
        {auth.loading ? <Loading /> : props.children}
      </div>
    </>
  );
}

export default ProfileLayout;
