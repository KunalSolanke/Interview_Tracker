import React, {useRef,useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfileLayout from "../../layouts/ProfileLayout";
import Editor from "../../components/Editor/Editor";
import {createInterview} from '../../store/actions/dashoard'
import {useSelector,useDispatch} from "react-redux"
import {convertToRaw} from 'draft-js' ;
import draftToHtml from 'draftjs-to-html';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  sectionHead: {
    fontSize: "18px",
    fontWeight: 700,
    width: "80%",
    margin: "2rem auto",
  },
  input: {
    backgroundColor: "#508DF9",
    width: "41vw",
    padding: "7px 7px 7px 7px",
    borderRadius: "16px",
    outline: "none",
    border: "none",
    color: "white",
    fontSize: "18px",
    minWidth: "400px",
  },
  root: {
    backgroundColor: "#fafafa",
    width: "100%",
  },
  label: {
    fontWeight: "300",
  },
  interViewForm: {
    minWidth: "400px",
    width: "60%",
    margin: "2rem auto",
  },
  row: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
});

function AddInterView() {
  const classes = useStyles();
  const [editorData, seteditorData] = useState(null);
  const form = useRef(null) ;
  const profile = useSelector(state => state.auth.profile)
  const dispatch = useDispatch()
  const history = useHistory();
  const handleSubmit = async (e)=>{
          e.preventDefault() ;
          console.log('save pe click ho gya')
          const data =await new FormData(form.current) ;
          data.append("content",draftToHtml(convertToRaw(editorData.getCurrentContent())))
          await dispatch(createInterview(data));
          history.push('/profile/myInterviews')
  }
  return (
    <ProfileLayout>
      <div className={classes.root}>
        <div className={classes.sectionHead}>
          <h1>Add InterView</h1>
        </div>
        <div>
          <form className={classes.interViewForm} ref={form}>
            <div className={classes.row}>
              <div>
                <h1 style={{ fontSize: "20px" }} className={classes.label}>
                  Title
                </h1>
                <input
                  style={{ outline: "none", content: "upload" }}
                  type="text"
                  className={classes.input}
                  name="title"
                />
              </div>

            </div>
            <div className={classes.row}>
              <div>
                <h1 style={{ fontSize: "20px" }} className={classes.label}>
                  Company
                </h1>
                <input
                  style={{ outline: "none", content: "upload" }}
                  type="text"
                  className={classes.input}
                  name="company"
                />
              </div>
              
            </div>
            <div className={classes.row}>
              <div>
                <h1 style={{ fontSize: "20px" }} className={classes.label}>
                  Description
                </h1>
                <textarea
                  style={{ width: "100%" }}
                  className={classes.input}
                  rows={4}
                  cols={70}
                  name="description"
                />
              </div>
            </div>
            <div className={classes.row}>
              <div>
                <span style={{ fontSize: "18px" }} className={classes.label}>
                  Cover Photo{" "}
                </span>
                <input
                  style={{ outline: "none", content: "upload" }}
                  type="file"
                  name="image"
                />
              </div>
            </div>
            <div className={classes.row}>
              <div>
                <h1 style={{ fontSize: "20px" }} className={classes.label}>
                  Content
                </h1>
                <Editor seteditorData={seteditorData} editorData={editorData} />
              </div>
            </div>
            <div className={classes.row} style={{ textAlign: "center" }}>
              <div>
                <button
                  style={{
                    fontSize: "20px",
                    fontColor: "#508df9",
                    color: "#508df9",
                    marginTop: "1rem",
                  }}
                  className={classes.label}
                  onClick={handleSubmit}
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default AddInterView;
