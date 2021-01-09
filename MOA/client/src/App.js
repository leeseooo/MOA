import { Route, Switch } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import Navbar from './NavBar/Navbar';
import VideoUploadPage from './VideoUploadPage/VideoUploadPage';
import VideoDetailPage from './VideoDetailPage/VideoDetailPage';
import ImageUploadPage from './ImageUploadPage/ImageUploadPage';
import RegisterPage from "./RegisterPage/RegisterPage.js";
import LoginPage from "./LoginPage/LoginPage";
import SearchResultPage from "./SearchResultPage/SearchResultPage";
import Auth from "./hoc/auth";
import MainPage from "./mainpage/Mainpage";

import Axios from 'axios'

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Navbar />
      <div style={{ paddingTop: '69px' }}>
      <Switch>
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
      </Switch>
      </div>
    </Suspense>
    
  );
}

export default App;