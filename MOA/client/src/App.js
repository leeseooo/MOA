
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './NavBar/Navbar'
import MainPage from './mainpage/Mainpage'
import VideoUploadPage from './VideoUploadPage/VideoUploadPage'
import VideoDetailPage from './VideoDetailPage/VideoDetailPage'
import ImageUploadPage from './ImageUploadPage/ImageUploadPage'
import RegisterPage from "./RegisterPage/RegisterPage.js";
import LoginPage from "./LoginPage/LoginPage";
import SearchResultPage from "./SearchResultPage/SearchResultPage";
import BroadCastForm from "./LiveVideoPage/BroadCastPage/BroadCastForm";
import BroadCastPage from "./LiveVideoPage/BroadCastPage/BroadCastPage";
import LiveVideoPage from "./LiveVideoPage/LiveVideoPage/LiveVideoPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Navbar />
      <div style={{ paddingTop: '69px' }}>

      <Switch>
          <Route exact path="/" component={Auth(MainPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/upload" component={Auth(VideoUploadPage, null)} />
          <Route exact path="/image" component={Auth(ImageUploadPage, true)} />
          <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
          <Route exact path="/search" component={Auth(SearchResultPage, null)}/>
          <Route exact path="/broadcastform" component={Auth(BroadCastForm, true)}/>
          <Route exact path="/broadcast/:broadcastId" component={Auth(BroadCastPage, true)}/>
          <Route exact path="/liveVideo/:liveId" component={Auth(LiveVideoPage, null)}/>
      </Switch>
      </div>
    </Suspense>
  );
}

export default App;