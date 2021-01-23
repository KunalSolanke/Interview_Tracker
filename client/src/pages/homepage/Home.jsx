import React from 'react'
import {Grid} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom' ;
import landingBottom from "../../assets/landing_bottom.svg";
import practiceImage from "../../assets/practice_image.svg";
import quotes from "../../assets/quotes.png";
import herobg from '../../assets/hero_bg.png'
import Carousel from '../../components/Carousel/Carousel';
import InterViewTile from './InterViewTile';

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
  ihead:{
      "&>h1":{
        fontWeight : "900",
        fontSize : "32px",
        "&>span":{
            color : "#2272FF",
            fontSize :"40px"     
        },
    },
     "&>p":{
            width : "50%",
            minWidth : "400px"
        }
  },
  interViewSection :{
      marginTop :"60px"
  },
  icarousel :{
      marginTop : "6rem",
      display : "grid",
      placeItems: "center",
      "&>div":{
          width : "46vw",
          minWidth : "400px",
          overflow : "hideen"
      }
  },
  quotes:{
       position :"absolute",
        top : 20 ,
          left : 20,
          transform : "translate(-80%,-50%)",
          zIndex : 10
  },
  phead:{
      "&>h1":{
        fontWeight : "900",
        fontSize : "32px",
        "&>span":{
            color : "#2272FF",
            fontSize :"40px"     
        },
    },
},
practiceSection:{
    marginTop : "5rem"
},
pBody:{
    marginTop : "2rem"

},
pContent:{
   fontWeight : "400",
   fontSize : "18px",
},
practiceImage:{
    width:"100%",
    objectFit:"cover"
},
footer:{
    marginTop : "8rem",
    backgroundColor:"#659CFC",
    height:"40vh"
},
rights:{
    backgroundColor:"#508DF9",
    height:"5vh",
    textAlign:"center",
    display:"grid",
    placeItems:"center",
    fontSize:"14px",
    color :"white"
}


});

const data ={
    title : "SDG Profile Intern at amazon",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user :{
        pic :"data:image/jpeg;base64,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"
    },
    pic : "https://kraftshala.com/wp-content/uploads/2018/01/Amazon-1-1-e1531121951917-1.jpg"

}
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
              <div>
                <div className ={`${classes.interViewSection} ${classes.container}`}>
                    <div className = {classes.ihead}>
                        <h1><span>IE</span>xperiences</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.
                        </p>
                    </div>
                    <div className ={classes.icarousel}>
                        <div style={{position:"relative"}}>
                            <img src={quotes} className={classes.quotes} />
                          <Carousel tiles ={[(<InterViewTile key={1} data={data}/>),(<InterViewTile key={2} data={data}/>),(<InterViewTile key={3} data={data}/>)]} />
                      </div>
                    </div>
                </div>
              </div>
              <div>
                  <div className = {`${classes.practiceSection} ${classes.container}`}>
                        <div className = {classes.phead}>
                            <h1><span>P</span>ractice</h1>  
                        </div>
                        <div className ={classes.pBody}>
                            <Grid container spacing={10} alignItems="center" justify="space-between" direction="row">
                                <Grid item xs={12} lg={6} md={6}>
                                    <p className={classes.pContent}>
                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Grid>
                                 <Grid item xs={12} lg={6} md={6}>
                                    <img src={practiceImage} alt="practice" className={classes.practiceImage} />
                                </Grid>
                            </Grid>
                        </div>
                  </div>
              </div>
              <div className={classes.footer}>
                 
              </div>
              <div className={classes.rights}>
                  <div>CopyRights @ InterviewTrack 2020</div>
              </div>
      </div>
    )
}




