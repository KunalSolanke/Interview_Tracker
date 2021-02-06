import React from "react";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Registration/Registration";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/homepage/Home";
import Profile from "./pages/ProfilePage/Profile";
import AddInterView from "./pages/AddInterView/AddInterView";
import Practice from "./pages/Practice/Practice";
import QuestionForm from "./pages/QuestionPage/QuestionForm";
import InterviewPage from './pages/InterviewPage/InterviewPage'

const useStyles = makeStyles({
  root: {
    width: "94%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "60px",
    minWidth: "300px",
    overflowX: "hidden",
  },
  app: {
    backgroundColor: "white",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={`App ${classes.app}`}>
      <BrowserRouter>
        <BaseLayout />
        <Switch>
          <Route exact path="/practice" component={Practice}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/accounts/register">
            <Register />
          </Route>
          <Route exact path="/accounts/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route
            exact
            path="/profile/interviews/create"
            component={AddInterView}
          ></Route>
          <Route exact path = "/profile/questions/create">
            <QuestionForm/>
          </Route>
          <Route exact path = "/profile/myInterviews">
            <InterviewPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
