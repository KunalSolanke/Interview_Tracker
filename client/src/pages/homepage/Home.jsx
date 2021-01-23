import React from 'react'
import {Grid} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom' ;
import landingBottom from "../../assets/landing_bottom.svg";
import herobg from '../../assets/hero_bg.png'

const useStyles = makeStyles({
  container :{
      maxWidth : "1500px",
      margin : "10px auto"
  },
  bannerImage :{
      position:"absolute",
      bottom : 0,
      right : 0,
      height : '80vh',
      objectFit :"cover"
  },
  landingSection :{
      minHeight : '90vh',
      marginTop : "-20px",
      padding:"1rem",
      position : 'relative',
      OverflowY:"hidden"
  },
  landingBottom :{
      position :"absolute",
          bottom : 0 ,
          left : 5
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
});

export default function Home() {
    const dispatch = useDispatch() ;
    const authState = useSelector(state => state.auth) ;
    const classes = useStyles() ;
    
    return (
        <div>
              <div className={classes.landingSection}>
                  <img src={landingBottom} className={classes.landingBottom} />
                    <div className={`${classes.landingSection} ${classes.container}`} >
                        
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
                                
                            </Grid>

                        </Grid>   
                    </div>
                    <img src={herobg} className = {classes.bannerImage} alt="landing" />
              </div>
              <div className ={classes.interViewSection}>
                <div className = {classes.ihead}>
                    <span>I</span>
                    <h1>Experiences</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.
                    </p>
                </div>
                <div className ={classes.icarousel}>

                </div>
              </div>   
      </div>
    )
}
