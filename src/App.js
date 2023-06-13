import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddCourse from './components/AddCourse';
import Home from './components/Home';
import AddCourseDetails from './components/AddCourseDetails';
import React, { useEffect } from 'react';
import Display from "./components/Display";
import './App.css'
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Questions from "./components/Questions";
import Tags from "./components/Tags";
import About from "./components/About";
import List from "./components/List";
import Articles from "./components/Articles";

function App() {
  useEffect(() => {
    localStorage.setItem('theme', 'light');
  }, []);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/add'><AddCourse /></Route>
          <Route path='/adddetails'><AddCourseDetails /></Route>
          <Route path='/list'><List /></Route>
          <Route path='/display'><Display /></Route>
          <Route path='/login'><Login /></Route>
          <Route path='/questions'><Questions /></Route>
          <Route path='/tags'><Tags /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/articles'><Articles /></Route>
          <Route >
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
