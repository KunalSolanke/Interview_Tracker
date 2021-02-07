import React,{useRef,useState,useEffect}from "react";
import "./Profile.css";
import {makeStyles} from '@material-ui/core/styles'
import ProfileLayout from "../../layouts/ProfileLayout";
import {updateProfile} from '../../store/actions/auth'
import {useSelector,useDispatch} from "react-redux"

const mystyles = makeStyles({
    input:{
        backgroundColor:'#508DF9',
        width:'100%',
        padding:'7px 7px 7px 7px',
        borderRadius:'16px',
        outline:'none',
        border:'none',
        color:'white',
        fontSize:'20px'
    },
    row:{
        marginTop:'20px',
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    form:{
        width:'95%',
        height:'90%',
        marginTop:'30px',
        paddingLeft:'20px',
        paddingRight:'20px',
        margin:'20px auto'
    },
    label:{
       fontWeight:'300' ,
       fontSize:'20px'
    },
    avatar:{
        width:'100px',
        height:'100px',
        borderRadius:'100%'
    },
    imgContainer:{
        display:'grid',
        placeItems:'center',
    },
    card:{
        padding:'1rem',
        display:'flex',
        flexDirection:'column'
    }
})

function Profile() {
    const classes = mystyles();
    const profileForm = useRef(null) ;
    const profile = useSelector(state => state.auth.profile)
    const dispatch = useDispatch()
    const handleSubmit = async (e)=>{
            e.preventDefault() ;
            console.log('save pe click ho gya')
            const data =await new FormData(profileForm.current) ;
            await dispatch(updateProfile(data));
    }
  return (
   
    <ProfileLayout>
      <div className="profile-area">
        <div className="form-container">
          <div className={classes.form}>
            <h1 style={{ fontSize: "25px" }} className="text">
              Update Profile
            </h1>
            <form
              style={{ marginTop: "20px" }}
              //onSubmit={(e) => handleSubmit(e)}
              ref={profileForm}
            >
              <div className={classes.row}>
                <div className="username">
                  <h1 className={classes.label}>Username</h1>
                  <input
                    className={classes?.input}
                    type="text"
                    name="username"
                    defaultValue={profile?.username}
                  />
                </div>
                <div className="email">
                  <h1 className={classes.label}>Email</h1>
                  <input
                    className={classes.input}
                    type="text"
                    name="email"
                    defaultValue={profile?.email}
                  />
                </div>
              </div>
              <div className={classes.row}>
                <div className="first-name">
                  <h1 className={classes.label}>First Name</h1>
                  <input
                    className={classes.input}
                    type="text"
                    name="first_name"
                    defaultValue={profile?.first_name}
                  />
                </div>
                <div className="last-name">
                  <h1 className={classes.label}>Last Name</h1>
                  <input
                    className={classes.input}
                    type="text"
                    name="last_name"
                    defaultValue={profile?.last_name}
                  />
                </div>
              </div>
              <div className={classes.row}>
                <div className="profile-pic">
                  <span className={classes.label}>Profile Pic </span>
                  <input
                    style={{ outline: "none", content: "upload" }}
                    type="file"
                    name ="image"
                  />
                </div>
              </div>
              <div className={classes.row}>
                <div className="bio">
                  <h1 className={classes.label}>Bio</h1>
                  <textarea
                    style={{ width: "100%" }}
                    className={classes.input}
                    rows={4}
                    cols={70}
                    defaultValue = {profile?.bio}
                    name="bio"
                  />
                </div>
              </div>
              <div style={{ width: "10%", margin: "0 auto" }}>
                <button
                  onClick={handleSubmit}
                  style={{
                    margin: "20px auto",
                    color: "#508DF9",
                    fontSize: "20px",
                    outline: "none",
                  }}
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={`profile-card ${classes.card}`}>
          <div style={{}} className={classes.imgContainer}>
            <img
              className={classes.avatar}
              src={profile?.image?.contentType}
              alt="An Image"
            />

            <h1
              style={{ fontWeight: 400, marginTop: "12px" }}
              className={classes.label}
            >
              {profile?.first_name||profile?.last_name?`${profile.first_name} ${profile.last_name}` : profile?.username}
            </h1>
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "30px",
              flex: 1,
              overflowY: "scroll",
            }}
          >
            <div className="bio">
              {profile?.bio}
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>)
  ;
}

export default Profile;
