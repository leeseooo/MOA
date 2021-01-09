import { Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import Navbar from './NavBar/Navbar'
import VideoUploadPage from './VideoUploadPage/VideoUploadPage'
import VideoDetailPage from './VideoDetailPage/VideoDetailPage'
import ImageUploadPage from './ImageUploadPage/ImageUploadPage'
import RegisterPage from "./RegisterPage/RegisterPage.js";
import LoginPage from "./LoginPage/LoginPage";
import MainPage from"./mainpage/Mainpage";
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
        {/* <Route exact path="/broadcast" component={Auth(BroadCastPage, null)} /> */}
        <Route exact path="/broadcastform" component={Auth(BroadCastForm, null)} />
        {/* <Route exact path="/liveVideo/:liveId" component={Auth(LiveVideoPage, null)} /> */}
        <Route exact path="/video/upload" component={Auth(VideoUploadPage, null)} />
        <Route exact path="/image/upload" component={Auth(ImageUploadPage, null)} />
        <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
        {/* <Route exact path="/carousel" component={Carouseltest} /> */}
      </Switch>
      </div>
    
    
  );
}

export default App;