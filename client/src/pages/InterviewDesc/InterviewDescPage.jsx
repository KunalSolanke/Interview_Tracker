import React from "react";
import Comment from "../../components/Comment/Comment";
import "./interviewdesc.css";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, useParams, useHistory } from "react-router-dom";
import {
  getInterviewById,
  getComments,
  postComment,
} from "../../store/actions/root";
import parse from "html-react-parser";
import Loading from "../../components/Loading/Loading";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Star from "../../components/Star/Star";
import {getStarredInterviews,starredInterviews} from '../../store/actions/dashoard'

function InterviewDescPage() {
  // console.log('history is ',history)
  //const interviewId = history.params.match.pk
  const { pk } = useParams();
  const dispatch = useDispatch();
  const root = useSelector((state) => state.root);
  console.log("root is ", root);
  const history = useHistory();
  const dashboard = useSelector((state) => state.dashboard);
  const [IsStarred, setIsStarred] = useState(false);
  const handleBookmark = async () => {
    setIsStarred((prev) => !prev);
    await dispatch(starredInterviews(pk));
    console.log("starred becomes ", dashboard.starredInterviews);
  };
  useEffect(() => {
    if(!localStorage.getItem("token")){
      history.push("/accounts/login")
    }
    if(dashboard.starredQuestions.length==0){
        dispatch(getStarredInterviews())
    }
  }, []);
  useEffect(() => {
    console.log(dashboard.starredInterviews);
    let list = dashboard.starredInterviews.filter(
      (interview) => interview._id == pk
    );
    console.log('list is ',list,' condition is ')
    let condition = list.length == 0;
    console.log(condition)
    //console.log(dashboard.starredInterviews,'and problem is ',problem._id.toString())
    if (!condition) {
      setIsStarred(true);
    } else {
      setIsStarred(false);
    }
  }, [dashboard.starredInterviews]);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/accounts/login");
    }
    const fun = async () => {
      if (!(root.currInterview && root.currInterview._id == pk)) {
        await dispatch(getInterviewById(pk));
      }
      await dispatch(getComments(pk));
    };
    fun();
  }, []);
  useEffect(() => {}, [root.comments]);
  useEffect(() => {
    console.log(root.currInterview);
  }, [root.currInterview]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = document.querySelector("#desc").value;
    dispatch(postComment(pk, desc));
  };
  return !root.loading ? (
    <>
      <div className="main">
        <div
          style={{
            backgroundImage: `url(${root.currInterview?.image?.contentType})`,
          }}
          className="img-container"
        ></div>
        <div className="container-2">
          <div className="cnt-content">
            <div className="content-img">
              <img
                className="profile"
                src={root.currInterview?.user.image.contentType}
                alt=""
              />
            </div>
            <div className="content-text">
              <div className="starFlex"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h1>SDE Interview at {root.currInterview?.company?.name} </h1>
                  <p>By {root.currInterview?.user?.username}</p>
                </div>
                <div className="star">
                  <Star IsStarred={IsStarred} handleBookmark={handleBookmark} />
                </div>
              </div>
              <h2>Overview</h2>
              <div className="overview divs">
                
                <p>{root.currInterview?.description}</p>
              </div>
              <h2>Experience</h2>
              <div className="Experience divs">
                <p>
                  {root.currInterview && parse(root.currInterview?.content)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-3">
        <div class="comment-sub">
          <form action="" method="post">
            <div class="Add-comment">
              <textarea
                name="comment"
                id="desc"
                rows={4}
                cols={80}
                placeholder="Write a comment.."
                class="demo-cmt"
              ></textarea>
            </div>
            <div class="button-div">
              <button onClick={handleSubmit} type="submit" class="btn">
                Add Comment
              </button>
            </div>
          </form>
        </div>
        <div class="comments">
          <h2 class="comment-heading">Comments</h2>
          <div class="comment-list">
            {root.comments?.map((c) => {
              return <Comment comment={c} />;
            })}
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default withRouter(InterviewDescPage);
