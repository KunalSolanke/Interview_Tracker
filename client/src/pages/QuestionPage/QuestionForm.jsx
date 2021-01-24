import React from "react";
import "./QuestionForm.css";
import {makeStyles} from '@material-ui/core/styles'
import ProfileLayout from "../../layouts/ProfileLayout";
import Select from '../../components/Select/Select'

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
        marginTop:'48px',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    form:{
        width:'95%',
        height:'90%',
        marginTop:'30px',
        padding:'30px',
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

function QuestionForm() {
    const classes = mystyles();
  return (
    <ProfileLayout>
      <div className="question-area">
          <div className="title">
              Add Question
          </div>
        <div className="ques-form-container">
          <div className={classes.form}>
            <form style={{marginTop:'20px'}} action="" method="post">
              <div className ={classes.row}>
                <div className="username">
                    <h1  className={classes.label}>Title</h1>
                    <input className={classes.input} type="text"/>
                </div>
              </div>
              <div className ={classes.row}>
                <div className="first-name">
                   <h1  className={classes.label}>Link</h1>  
                    <input className={classes.input} type="text" />
                </div>
              </div>
              <div className ={classes.row}>
                <div className="bio">
               <h1 className={classes.label}>Description</h1>
                    <textarea style={{width:'100%'}} className={classes.input} rows={4} cols={70} />
                </div>
              </div>
              <div className>
                <div className="difficulty">
               <h1 className={classes.label}>Difficulty</h1>
                    <Select className={classes.input}/>
                </div>
              </div>
              <div style={{width:'30%',margin:'0 auto'}} >
              <button style={{margin:'20px auto',color:'#508DF9',fontSize:'24px',outline:'none'}} type="button">Add Question</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  </ProfileLayout>
     
  );
}

export default QuestionForm;
