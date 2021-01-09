<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import Navbar from './NavBar/Navbar';
import VideoUploadPage from './VideoUploadPage/VideoUploadPage';
import VideoDetailPage from './VideoDetailPage/VideoDetailPage';
import ImageUploadPage from './ImageUploadPage/ImageUploadPage';
=======

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './NavBar/Navbar'
import MainPage from './mainpage/Mainpage'
import VideoUploadPage from './VideoUploadPage/VideoUploadPage'
import VideoDetailPage from './VideoDetailPage/VideoDetailPage'
import ImageUploadPage from './ImageUploadPage/ImageUploadPage'
>>>>>>> e9aa0f9b4444b902690c10a3a4f2d144c00aa779
import RegisterPage from "./RegisterPage/RegisterPage.js";
import LoginPage from "./LoginPage/LoginPage";
import SearchResultPage from "./SearchResultPage/SearchResultPage";
import BroadCastForm from "./LiveVideoPage/BroadCastPage/BroadCastForm";
import BroadCastPage from "./LiveVideoPage/BroadCastPage/BroadCastPage";
import LiveVideoPage from "./LiveVideoPage/LiveVideoPage/LiveVideoPage";
import Auth from "./hoc/auth";
<<<<<<< HEAD

import Axios from 'axios'
=======
>>>>>>> e9aa0f9b4444b902690c10a3a4f2d144c00aa779

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Navbar />
      <div style={{ paddingTop: '69px' }}>
<<<<<<< HEAD
=======

>>>>>>> e9aa0f9b4444b902690c10a3a4f2d144c00aa779
      <Switch>
          <Route exact path="/" component={Auth(MainPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/upload" component={Auth(VideoUploadPage, null)} />
          <Route exact path="/image" component={Auth(ImageUploadPage, true)} />
          <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
          <Route exact path="/search" component={Auth(SearchResultPage, null)}/>
<<<<<<< HEAD
          {/* <Route exact path="/landing" component={Auth(LandingPage, null)} /> */}
=======
          <Route exact path="/broadcastform" component={Auth(BroadCastForm, true)}/>
          <Route exact path="/broadcast/:broadcastId" component={Auth(BroadCastPage, true)}/>
          <Route exact path="/liveVideo/:liveId" component={Auth(LiveVideoPage, null)}/>
>>>>>>> e9aa0f9b4444b902690c10a3a4f2d144c00aa779
      </Switch>
      </div>
    </Suspense>
  );
}

export default App;