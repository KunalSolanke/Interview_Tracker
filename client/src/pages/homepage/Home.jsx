import React from 'react'
import {Container, Grid,Button} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom' ;
import herobg from '../../assets/hero_bg.png'
import landingBottom from '../../assets/landing_bottom.svg'
import navbarImg from '../../assets/navbar_image.svg'

const useStyles = makeStyles({
  navLinks:{
      display:'flex',
      justifyContent : 'space-between',
      alignItems :'center',
  },
  container :{
      maxWidth : "1500px",
      margin : "10px auto"

  },

   navBar:{
      display:'flex',
      justifyContent : 'space-between',
      alignItems :'center',
      padding:"1rem"
  },
   navLinks:{
      display:'flex',
      justifyContent : 'space-between',
      alignItems :'center',
      fontSize : "18px"
  },
  navLink:{
      marginLeft : "30px",
      "&:hover":{
          color : "#2272FF",
      },
      transition : "all .5s ease-in",
      outline : "none"
  },
  bannerImage :{
      backgroundImage:`url(${herobg})`,
      width:"100%",
      backgroundRepeat :"no-repeat",
      position : "relative",
      right : "-30%",
      top:"20%",
  },
  landingSection :{
      minHeight : '90vh',
      marginTop:"15px",
      padding:"1rem"
  },
  landingBottom :{
      position :"absolute",
          bottom : 0 ,
          left : 5
  },
  navImg :{
      position :"absolute",
          top : 0 ,
          right : 0
  },
  logo :{
      fontWeight : "700",
      color : "#2272FF",
      fontSize : "26px"
  },
  heroTitle :{
      fontWeight : "900",
      fontSize : "32px",
      "&>span":{
         color : "#2272FF",      
      },
      marginBottom :"3rem"
  },
  heroContent :{
      marginBottom : "2rem"
  },
  CTA :{
      padding :"0.5rem 2rem",
      backgroundColor : "#2272FF",
      color : "#fff",
      borderRadius : "20px",
      border : "2px solid #2272FF",
      "&:hover":{
          backgroundColor : "#fff",
          color : "black"
      },
      transition : "all .3s ease-in"
  },
  activeLink :{
      color : "#2272FF"
  }
});

export default function Home() {
    const dispatch = useDispatch() ;
    const authState = useSelector(state => state.auth) ;
    const classes = useStyles() ;
    
    return (
        <React.Fragment>
            <header style={{position:"relative" ,overflow : "hidden"}}>
                <img src={landingBottom} className={classes.landingBottom}/>
                <img src={navbarImg} className={classes.navImg} />
              <div className={classes.container}>
                  <nav className={classes.navBar}>
                      <div className={classes.logoDiv}>
                          <h1 className={classes.logo}>InterviewTrack</h1>
                      </div>
                      <div className={classes.navLinks}>
                          <NavLink activeClassName={classes.activeLink} to="/problems" className={classes.navLink}>practice</NavLink>
                          <NavLink activeClassName={classes.activeLink} to="/interviews" className={classes.navLink}>Interviews</NavLink>
                          {
                              authState.token ? null : <NavLink activeClassName={classes.activeLink} to="/login" className={classes.navLink}>Login</NavLink>
                          }
                      </div>
                  </nav> 
              </div>
              <div className={`${classes.landingSection} ${classes.container}`}>
                  <Grid container spacing={4}direction="row" justify="center" alignItems="center" style={{height:"90vh"}}>
                       <Grid container item xs={12} md={6} lg={6}>
                           <div className={classes.heroTitle}>
                               INTERVIEW<span>TRACK</span>
                           </div>
                           <div className={classes.heroContent}>
                             <p>
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                             </p>
                           </div>
                           <div className={classes.CTA}>
                               <Link>Start Right Now</Link>
                           </div>
                       </Grid>
                       <Grid container item xs={12} md={6} lg={6} style={{height:"100%"}}>
                           <div class={classes.bannerImage}>

                           </div>

                       </Grid>

                  </Grid>   
              </div>
            </header>
        </React.Fragment>
    )
}
