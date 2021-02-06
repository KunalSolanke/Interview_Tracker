import React, { useRef, useState, useEffect } from "react";
import "./QuestionForm.css";
import {makeStyles} from '@material-ui/core/styles'
import ProfileLayout from "../../layouts/ProfileLayout";
import Select from '../../components/Select/Select'
import { addQuestion } from "../../store/actions/dashoard";
import { useSelector, useDispatch } from "react-redux";


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
    const dispatch = useDispatch();
    const form = useRef(null);
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("save pe click ho gya");
      const data = new FormData(form.current);
      console.log('Yaha aay kya mai')
      console.log('data is ', data.get('topics'))
      await dispatch(addQuestion(data));
    };
  return (
    <ProfileLayout>
      <div className="question-area">
        <div className="title">Add Question</div>
        <div className="ques-form-container">
       <div className={classes.form}>
            <form
              style={{ marginTop: "20px" }}
              action=""
              method="post"
              ref={form}
              onSubmit={handleSubmit}
            >
              <div className={classes.row}>
                <div className="username">
                  <h1 className={classes.label}>Title</h1>
                  <input className={classes.input} type="text" name="title"/>
                </div>
              </div>
              <div className={classes.row}>
                <div className="first-name">
                  <h1 className={classes.label}>Link</h1>
                  <input className={classes.input} type="text" name="url" />
                </div>
              </div>
              <div className={classes.row}>
                <div className="first-name">
                  <h1 className={classes.label}>Topics</h1>
                  <input className={classes.input} type="text" name="topics"/><br></br>
                  <span>Enter topics separated by comma(',')</span>
                </div>
              </div>
              <div className={classes.row}>
                <div className="bio">
                  <h1 className={classes.label}>Description</h1>
                  <textarea
                    style={{ width: "100%" }}
                    className={classes.input}
                    rows={4}
                    cols={70}
                    name="description"
                  />
                </div>
              </div>
              <div className>
                <div className="difficulty">
                  <h1 className={classes.label}>Difficulty</h1>
                  <Select className={classes.input} name="difficulty"/>
                </div>
              </div>
              <div style={{ width: "30%", margin: "0 auto" }}>
                <button
                  style={{
                    margin: "20px auto",
                    color: "#508DF9",
                    fontSize: "24px",
                    outline: "none",
                  }}
                  type="submit"
                >
                  Add Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default QuestionForm;
