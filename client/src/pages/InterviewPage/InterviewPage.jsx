import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ProfileLayout from '../../layouts/ProfileLayout'
import Interview from '../../components/Interview/Interview'

const useStyles = makeStyles({
    root:{
        width:'100%'
    },
    interviews:{
        width:'90%',
        paddingLeft:'35px',
        marginTop:'40px'
    },
    title:{
        fontSize:'30px'
    }
})

function InterviewPage() {
    const classes = useStyles()
    return (
        <ProfileLayout>
            <div className={classes.root}>
                <div className={classes.interviews}>
                   <h1 className={classes.title}> My Interviews </h1>
                   <Interview/>
                   <Interview/>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default InterviewPage
