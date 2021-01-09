<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import Navbar from './NavBar/Navbar';
import VideoUploadPage from './VideoUploadPage/VideoUploadPage';
import VideoDetailPage from './VideoDetailPage/VideoDetailPage';
import ImageUploadPage from './ImageUploadPage/ImageUploadPage';
=======

>>>>>>> fbace1a1f601ccf83c71286fb7d1c75ad7f5ebd0
>>>>>>> cdda10cee7cef18d58d993af74f56c6581c94e32
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './NavBar/Navbar'
import MainPage from './mainpage/Mainpage'
import VideoUploadPage from './VideoUploadPage/VideoUploadPage'
import VideoDetailPage from './VideoDetailPage/VideoDetailPage'
import ImageUploadPage from './ImageUploadPage/ImageUploadPage'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> e9aa0f9b4444b902690c10a3a4f2d144c00aa779
>>>>>>> fbace1a1f601ccf83c71286fb7d1c75ad7f5ebd0
>>>>>>> cdda10cee7cef18d58d993af74f56c6581c94e32
import RegisterPage from "./RegisterPage/RegisterPage.js";
import LoginPage from "./LoginPage/LoginPage";
import MainPage from"./mainpage/Mainpage";
import SearchResultPage from "./SearchResultPage/SearchResultPage";
import BroadCastForm from "./LiveVideoPage/BroadCastPage/BroadCastForm";
import BroadCastPage from "./LiveVideoPage/BroadCastPage/BroadCastPage";
import LiveVideoPage from "./LiveVideoPage/LiveVideoPage/LiveVideoPage";
import Auth from "./hoc/auth";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cdda10cee7cef18d58d993af74f56c6581c94e32

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Navbar/>
=======
      <Navbar />
>>>>>>> cdda10cee7cef18d58d993af74f56c6581c94e32
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/search" component={Auth(SearchResultPage, false)} />     
        {/* <Route exact path="/broadcast" component={Auth(BroadCastPage, null)} /> */}
        <Route exact path="/broadcastform" component={Auth(BroadCastForm, null)} />
        {/* <Route exact path="/liveVideo/:liveId" component={Auth(LiveVideoPage, null)} /> */}
        <Route exact path="/video/upload" component={Auth(VideoUploadPage, null)} />
        <Route exact path="/image/upload" component={Auth(ImageUploadPage, null)} />
        <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
        {/* <Route exact path="/carousel" component={Carouseltest} /> */}
      </Switch>
    </div>

=======
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
<<<<<<< HEAD
    
    
=======
    </Suspense>
>>>>>>> fbace1a1f601ccf83c71286fb7d1c75ad7f5ebd0
>>>>>>> cdda10cee7cef18d58d993af74f56c6581c94e32
  );
}

export default App;