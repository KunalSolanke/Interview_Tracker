import React from "react";
import Sidebar from "../../components/Sidebar.jsx/Sidebar";
import "./Profile.css";
import {makeStyles} from '@material-ui/core/styles'

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
        justifyContent:'space-between'
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
       fontSize:'23px'
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
  return (
    <div className="profile-container">
      <Sidebar />
      <div className="profile-area">
        <div className="form-container">
          <div className={classes.form}>
          <h1 style={{fontSize:'30px'}} className="text">Update Profile</h1>
            <form style={{marginTop:'20px'}} action="" method="post">
              <div className ={classes.row}>
                <div className="username">
                    <h1  className={classes.label}>Username</h1>
                    <input className={classes.input} type="text"/>
                </div>
                <div className="email">
                   <h1  className={classes.label}>Email</h1>
                    <input className={classes.input} type="text"/>
                </div>
              </div>
              <div className ={classes.row}>
                <div className="first-name">
                   <h1  className={classes.label}>First Name</h1>  
                    <input className={classes.input} type="text" />
                </div>
                <div className ="last-name">
               <h1  className={classes.label}>Last Name</h1>
                    <input className={classes.input} type="text"/>    
                </div>
              </div>
              <div className ={classes.row}>
                <div className="profile-pic">
               <span className={classes.label}>Profile Pic </span>
                    <input style={{outline:'none',content:'upload'}} type="file"/>
                </div>
              </div>
              <div className ={classes.row}>
                <div className="bio">
               <h1 className={classes.label}>Bio</h1>
                    <textarea style={{width:'100%'}} className={classes.input} rows={4} cols={70} />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={`profile-card ${classes.card}`}>
          <div style={{}} className={classes.imgContainer}>
            <img className={classes.avatar} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0af1daed-aa90-4c43-95f4-2c4b20f7ef5e/ddzoqeb-13d1758b-80c6-4c20-9691-fa36676552d9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGFmMWRhZWQtYWE5MC00YzQzLTk1ZjQtMmM0YjIwZjdlZjVlXC9kZHpvcWViLTEzZDE3NThiLTgwYzYtNGMyMC05NjkxLWZhMzY2NzY1NTJkOS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.caqlcCbauLCE2Pfb5EcznfAs7EodXmnsVAAGCFlTalQ" alt="An Image" />
            <h1 style={{fontWeight:400,marginTop:'12px'}} className={classes.label}>Daksh Chhabra</h1>
          </div>
          <div style={{width:'100%',marginTop:'30px',flex:1,overflowY:'scroll'}} >
            <div className="bio">
              Here goes my bio which i will not wriyte nowI am saying this shit
              instaed of writing my bio Thank yo for wasting your ti on me
              Here goes my bio which i will not wriyte nowI am saying this shit
              instaed of writing my bio Thank yo for wasting your ti on me
              Here goes my bio which i will not wriyte nowI am saying this shit
              instaed of writing my bio Thank yo for wasting your ti on me
              Here goes my bio which i will not wriyte nowI am saying this shit
              instaed of writing my bio Thank yo for wasting your ti on me
              Here goes my bio which i will not wriyte nowI am saying this shit
              instaed of writing my bio Thank yo for wasting your ti on me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
