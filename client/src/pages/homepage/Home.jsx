import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
import landingBottom from "../../assets/landing_bottom.svg";
import practiceImage from "../../assets/practice_image.svg";
import quotes from "../../assets/quotes.png";
import herobg from '../../assets/hero_bg.png'
import Carousel from '../../components/Carousel/Carousel';
import InterViewTile from './InterViewTile';
import { getTopInterviews } from "../../store/actions/root"
const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "1500px",
        margin: "10px auto"
    },
    bannerImage: {
        position: "absolute",
        bottom: 0,
        right: 0,
        height: '74vh',
        objectFit: "cover",
        [theme.breakpoints.down("965")]: {
            display: "none",
        },
    },
    landingSection: {
        minHeight: '90vh',
        marginTop: "-20px",
        padding: "1rem",
        position: 'relative',
        OverflowY: "hidden",
        [theme.breakpoints.down("965")]: {
            marginTop: "1px",
        },

    },
    landingBottom: {
        position: "absolute",
        bottom: 0,
        left: 5,
        [theme.breakpoints.down("965")]: {
            display: "none",
        },
    },
    heroTitle: {
        fontWeight: "900",
        fontSize: "32px",
        "&>span": {
            color: "#2272FF",
        },
        marginBottom: "3rem"
    },
    heroContent: {
        marginBottom: "2rem"
    },
    CTA: {
        padding: "0.5rem 2rem",
        backgroundColor: "#2272FF",
        color: "#fff",
        borderRadius: "20px",
        border: "2px solid #2272FF",
        "&:hover": {
            backgroundColor: "#fff",
            color: "black"
        },
        transition: "all .2s ease-in"
    },
    ihead: {
        "&>h1": {
            fontWeight: "900",
            fontSize: "32px",
            "&>span": {
                color: "#2272FF",
                fontSize: "40px",
                [theme.breakpoints.down("650")]: {
                    fontSize: "35px"
                }
            },
            [theme.breakpoints.down("650")]: {
                fontSize: "28px",
            }
        },
        "&>p": {
            width: "50%",
            minWidth: "400px",
            [theme.breakpoints.down("650")]: {
                minWidth: "350px",
                fontSize: "14px"
            }
        },


    },
    interViewSection: {
        marginTop: "60px",
        [theme.breakpoints.down("650")]: {
            margin: 0,
            padding: "1rem",
        }
    },
    icarousel: {
        marginTop: "6rem",
        display: "grid",
        placeItems: "center",
        "&>div": {
            width: "46vw",
            minWidth: "400px",
            overflow: "hideen"
        },
        [theme.breakpoints.down("650")]: {
            marginTop: "4rem",
        }
    },
    quotes: {
        position: "absolute",
        top: 20,
        left: 20,
        transform: "translate(-80%,-50%)",
        zIndex: 10,

        [theme.breakpoints.down("650")]: {
            height: "8vh",
            transform: "translate(-50%,-50%)",
            top: 5,
            left: 20,
        }
    },
    phead: {
        "&>h1": {
            fontWeight: "900",
            fontSize: "32px",
            "&>span": {
                color: "#2272FF",
                fontSize: "40px",
                [theme.breakpoints.down("650")]: {
                    fontSize: "35px",
                }
            },
            [theme.breakpoints.down("650")]: {
                fontSize: "28px",
            }
        },
    },
    practiceSection: {
        marginTop: "5rem",
        [theme.breakpoints.down("650")]: {
            margin: 0,
            padding: "1rem",
        }
    },
    pBody: {
        marginTop: "2rem"

    },
    pContent: {
        fontWeight: "400",
        fontSize: "18px",
        [theme.breakpoints.down("650")]: {
            fontSize: "14px",
        }
    },
    practiceImage: {
        width: "100%",
        objectFit: "cover"
    },
    footer: {
        marginTop: "8rem",
        backgroundColor: "#659CFC",
        // height:"50vh",
        [theme.breakpoints.down("650")]: {
            margin: 0,
            padding: "1rem",
        }
    },
    aimDiv: {
        maxWidth: 600,
        fontSize: "16px",
        fontWeight: 400,
        color: "white"
    },
    socialLinks: {
        marginTop: "1rem",
        fontSize: "20px",
        fontweight: 500,
        color: "white",
        "&>div": {
            display: "flex",
            marginTop: "1rem",
            "&>img": {
                marginRight: "25px",
                transition: 'all .2s ease-in',

            },
            "&>img:hover": {
                transform: "scale(1.3,1.3)"
            },
            [theme.breakpoints.down("650")]: {

            }
        }
    },
    formDiv: {
        color: "white",
        display: "grid",
        placeItems: "center"
    },
    contactTitle: {
        marginBottom: "1rem",
        fontSize: "22px",
        fontweight: 500,
        color: "white"
    },
    formGroup: {
        marginBottom: "0.6rem",
        "&>label": {
            marginBottom: ".5rem",
            fontSize: "16px",
            linHeight: "18px"
        }
    },
    cInput: {
        backgroundColor: "#508DF9",
        color: "white",
        fontSize: "18px",
        padding: ".3rem 2rem",
        borderRadius: "15px",
        resize: 'none',
        border: 'none',
        outline: 'none',
        width: "80%",
        maxWidth: "600px",
        minWidth: "360px",
        color: "white",
        [theme.breakpoints.down("650")]: {
            minWidth: "320px",
        }
    },
    formSend: {
        backgroundColor: "#508DF9",
        borderRadius: "15px",
        textAlign: "center",
        padding: ".3rem 2rem",
        width: "200px",
        border: 'none',
        outline: 'none'
    }
    ,
    rights: {
        backgroundColor: "#508DF9",
        height: "5vh",
        textAlign: "center",
        display: "grid",
        placeItems: "center",
        fontSize: "15px",
        color: "white"
    }


}));

const data = {
    title: "SDG Profile Intern at amazon",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    user: {
        pic: "data:image/jpeg;base64,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"
    },
    pic: "https://www.collegehumara.com/wp-content/uploads/2020/06/Interview-Experience.png"

}
export default function Home() {
    const dispatch = useDispatch();
    const root = useSelector(state => state.root);
    const classes = useStyles();

    useEffect(() => {
        dispatch(getTopInterviews())
    }, [])
    useEffect(() => {

    }, [root.topInterviews])
    return (
        <div>
            <div className={classes.landingSection}>
                <img src={landingBottom} className={classes.landingBottom} />
                <div className={`${classes.landingSection} ${classes.container}`} >
                    <Grid container spacing={4} direction="row" justify="center" alignItems="center" style={{ height: "90vh" }}>
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
                                <Link to="/practice">Start Right Now</Link>
                            </div>
                        </Grid>
                        <Grid container item xs={12} md={6} lg={6} style={{ height: "100%" }}>

                        </Grid>

                    </Grid>
                </div>
                <img src={herobg} className={classes.bannerImage} alt="landing" />
            </div>
            <div>
                <div className={`${classes.interViewSection} ${classes.container}`}>
                    <div className={classes.ihead}>
                        <h1><span>IE</span>xperiences</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.
                        </p>
                    </div>
                    <div className={classes.icarousel}>
                        <div style={{ position: "relative" }}>
                            <img src={quotes} className={classes.quotes} />
                            <Carousel tiles={root.topInterviews ? root.topInterviews.map((e, i) => <InterViewTile key={i} data={e} />) : []} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={`${classes.practiceSection} ${classes.container}`}>
                    <div className={classes.phead}>
                        <h1><span>P</span>ractice</h1>
                    </div>
                    <div className={classes.pBody}>
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
                <div className={classes.container}>
                    <Grid container spacing={10} alignItems="center" justify="space-between" direction="row">
                        <Grid item xs={12} lg={6} md={6}>
                            <div className={classes.aimDiv}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                            </div>
                            <div className={classes.socialLinks}>
                                <h1>React out to us at</h1>
                                <div>
                                    <img src="https://img.icons8.com/nolan/40/facebook-new.png" />
                                    <img src="https://img.icons8.com/cute-clipart/40/000000/instagram-new.png" />
                                    <img src="https://img.icons8.com/cute-clipart/40/000000/twitter.png" />
                                    <img src="https://img.icons8.com/cute-clipart/40/000000/linkedin.png" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6} md={6} >
                            <div className={classes.formDiv}>
                                <div className={classes.contactTitle}>Contact us at</div>
                                <form>
                                    <div className={classes.formGroup}>
                                        <label hmtlFor="name">Name</label><br />
                                        <input className={classes.cInput} type="name" />
                                    </div>
                                    <div className={classes.formGroup}>
                                        <label hmtlFor="name">Email</label><br />
                                        <input className={classes.cInput} type="email" />
                                    </div>
                                    <div className={classes.formGroup}>
                                        <label hmtlFor="name">Message</label><br />
                                        <textarea rows={2} className={classes.cInput} type="text" />
                                    </div>
                                    <div style={{ display: "grid", placeItems: "center" }}>
                                        <button className={classes.formSend} type="submit">Send</button>
                                    </div>
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={classes.rights}>
                <div>CopyRights @ InterviewTrack 2020</div>
            </div>
        </div>
    )
}




