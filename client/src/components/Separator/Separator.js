import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    Border: {
        width: "38%",
        height: "2px",
        backgroundColor: "rgb(219,219,219)"
      },
      separator: {
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: "20px"
      },
      OR: {
        color: "#8E8E8E",
        fontSize: "13px"
      },
})

function Separator({data}) {
    const classes = useStyles()
    return (
        <>
            <div className={classes.separator}>
            <div className={classes.Border}></div>
            <div className={classes.OR}> {data} </div>
            <div className={classes.Border}></div>
          </div>
        </>
    )
}

export default Separator
