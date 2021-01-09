import { Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import Navbar from './NavBar/Navbar'
import VideoUploadPage from './VideoUploadPage/VideoUploadPage'
import VideoDetailPage from './VideoDetailPage/VideoDetailPage'
import ImageUploadPage from './ImageUploadPage/ImageUploadPage'
import RegisterPage from "./RegisterPage/RegisterPage.js";
import MainPage from "./mainpage/Mainpage";
import LoginPage from "./LoginPage/LoginPage";
import LandingPage from "./SearchResultPage/LandingPage"
import SearchResultPage from "./SearchResultPage/SearchResultPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Auth(MainPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/upload" component={Auth(VideoUploadPage, null)} />
          <Route exact path="/image" component={Auth(ImageUploadPage, true)} />
          <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
          <Route exact path="/search" component={Auth(SearchResultPage, null)}/>
          {/* <Route exact path="/landing" component={Auth(LandingPage, null)} /> */}
      </Switch>
    </div>
  );
}

export default App;