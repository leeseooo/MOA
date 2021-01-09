import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import React, { Suspense, useEffect } from 'react';
import Navbar from './NavBar/Navbar';
import VideoUploadPage from './VideoUploadPage/VideoUploadPage';
import VideoDetailPage from './VideoDetailPage/VideoDetailPage';
import ImageUploadPage from './ImageUploadPage/ImageUploadPage';
=======
import React, { Suspense } from 'react';
import Navbar from './NavBar/Navbar'
import VideoUploadPage from './VideoUploadPage/VideoUploadPage'
import VideoDetailPage from './VideoDetailPage/VideoDetailPage'
import ImageUploadPage from './ImageUploadPage/ImageUploadPage'
>>>>>>> cc58a973a2cc2a5d7c309aef5619fcd6fec24cbb
import RegisterPage from "./RegisterPage/RegisterPage.js";
import MainPage from "./mainpage/Mainpage";
import LoginPage from "./LoginPage/LoginPage";
import LandingPage from "./SearchResultPage/LandingPage"
import SearchResultPage from "./SearchResultPage/SearchResultPage";
import Auth from "./hoc/auth";
<<<<<<< HEAD
import MainPage from "./mainpage/Mainpage";

import Axios from 'axios'

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Navbar />
      <div style={{ paddingTop: '69px' }}>
=======

function App() {
  return (
    <div>
      <Navbar/>
>>>>>>> cc58a973a2cc2a5d7c309aef5619fcd6fec24cbb
      <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={Auth(MainPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/upload" component={Auth(VideoUploadPage, null)} />
          <Route exact path="/image" component={Auth(ImageUploadPage, true)} />
          <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
          <Route exact path="/search" component={Auth(SearchResultPage, null)}/>
          {/* <Route exact path="/landing" component={Auth(LandingPage, null)} /> */}
=======
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        {/* <Route exact path="/broadcast" component={Auth(BroadCastPage, null)} /> */}
        {/* <Route exact path="/broadcastform" component={Auth(BroadCastForm, null)} /> */}
        {/* <Route exact path="/liveVideo/:liveId" component={Auth(LiveVideoPage, null)} /> */}
        <Route exact path="/video/upload" component={Auth(VideoUploadPage, null)} />
        <Route exact path="/image/upload" component={Auth(ImageUploadPage, null)} />
        <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
        {/* <Route exact path="/carousel" component={Carouseltest} /> */}
>>>>>>> 6efcc29b2d1e39f4959ca0782d3aee8fad647b00
      </Switch>
      </div>
    </Suspense>
    
  );
}

export default App;