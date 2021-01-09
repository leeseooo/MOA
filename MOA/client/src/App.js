import { Route, Switch } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import Navbar from './NavBar/Navbar'
import MainLandingPage from './MainLandingPage/MainLandingPage'
import VideoUploadPage from './VideoUploadPage/VideoUploadPage'
import VideoDetailPage from './VideoDetailPage/VideoDetailPage'
import ImageUploadPage from './ImageUploadPage/ImageUploadPage'
import LandingPage from "./LandingPage/LandingPage.js";
import RegisterPage from "./RegisterPage/RegisterPage.js";
import LoginPage from "./LoginPage/LoginPage";
import Auth from "./hoc/auth";
import Axios from 'axios'

function App() {
  return (
    <div>
      <Suspense fallback={(<div>Loading...</div>)}>
        <Navbar />
        <div style={{ paddingTop: '69px' }}>
        <Switch>
            <Route exact path="/" component={Auth(MainLandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="/upload" component={Auth(VideoUploadPage, null)} />
            <Route exact path="/image" component={Auth(ImageUploadPage, true)} />
            <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
        </Switch>
        </div>
      </Suspense>
    </div>
  );
}

export default App;