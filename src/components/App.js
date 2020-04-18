import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
// import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import AdvertisementPage from "./advertisement/AdvertisementPage";
import CoursesPage from "./course/CoursesPage";
import NewCourse from "./course/NewCourse";
import MaterialComponent from './material/Material';

const App = () => (
  <div className="container-fluid">
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/advertisements" component={AdvertisementPage}></Route>
      <Route path="/courses/new" component={NewCourse}></Route>
      <Route path="/courses" component={CoursesPage}></Route>
      <Route path="/test" component={MaterialComponent}></Route>
      <Route component={PageNotFound}></Route>
    </Switch>
  </div>
);

export default App;
