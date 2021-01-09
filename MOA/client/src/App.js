import { Route, Switch } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import MainPage from './mainpage/Mainpage'
import VideoUploadPage from './VideoUploadPage/VideoUploadPage'
import VideoDetailPage from './VideoDetailPage/VideoDetailPage'
import ImageUploadPage from './ImageUploadPage/ImageUploadPage'
import LandingPage from "./LandingPage/LandingPage.js";
import RegisterPage from "./RegisterPage/RegisterPage.js";
import LoginPage from "./LoginPage/LoginPage";
import Auth from "./hoc/auth";
import Axios from 'axios'
import SearchResultPage from './SearchResultPage/SearchResultPage';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/" component={Auth(MainPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/upload" component={Auth(VideoUploadPage, null)} />
          <Route exact path="/image" component={Auth(ImageUploadPage, true)} />
          <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
          <Route exact path="/search" component={Auth(SearchResultPage, null)} />
      </Switch>
    </div>
  );
}

export default App;