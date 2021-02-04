import React from "react";
import Nav from "./pages/homepage/Home";
import Login from "./pages/auth/Login/Login";
import Register from './pages/auth/Registration/Registration'
import Card from "./components/Card/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from './components/Sidebar.jsx/Sidebar'
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/homepage/Home";
import Profile from './pages/ProfilePage/Profile'
import QuestionForm from "./pages/QuestionPage/QuestionForm";
import InterviewPage from './pages/InterviewPage/InterviewPage'

const useStyles = makeStyles({
  root: {
    width: "94%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "60px",
    minWidth: "300px",
    overflowX:'hidden'
  },
  app:{
    backgroundColor:'white'
  }
})

function App() {
  const classes = useStyles();
  let [Topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/problems/topics")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.topic_list);
        const arr = data.topic_list.map((item) => item.title);
        setTopics(arr);
        console.log(Topics);
      })
      .catch((err) => console.log(err.messsge));
  }, []);
  return (
    <div className={`App ${classes.app}`}>
      <BrowserRouter>
        <BaseLayout />
        <Switch>
          <Route exact path="/topics">
            <Grid
              className={classes.root}
              container
              alignContent="center"
              alignItems="center"
              spacing={3}
            >
              {Topics.map((topic) => {
                return (
                  <Grid className={classes.item} item xs={12} sm={6} lg={4}>
                    <Card topic={topic} className={classes.item} />
                  </Grid>
                );
              })}
            </Grid>
          </Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/accounts/register">
            <Register />
          </Route>
          <Route exact path="/accounts/login">
            <Login/>
          </Route>
          <Route exact path = "/profile">
            <Profile/>
          </Route>
          <Route exact path = "/create">
            <QuestionForm/>
          </Route>
          <Route exact path = "/interviews">
            <InterviewPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
