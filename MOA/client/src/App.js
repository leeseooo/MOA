import { Route, Switch } from 'react-router-dom';
import Navbar from './NavBar/Navbar';
import VideoUploadPage from './VideoUploadPage/VideoUploadPage';
import VideoDetailPage from './VideoDetailPage/VideoDetailPage';
import ImageUploadPage from './ImageUploadPage/ImageUploadPage';
import React, { Suspense } from 'react';
import PostPage from "./PostPage";
import RegisterPage from "./RegisterPage/RegisterPage.js";
import LoginPage from "./LoginPage/LoginPage";
import MainPage from"./mainpage/Mainpage";
import SearchResultPage from "./SearchResultPage/SearchResultPage";
import BroadCastForm from "./LiveVideoPage/BroadCastPage/BroadCastForm";
import BroadCastPage from "./LiveVideoPage/BroadCastPage/BroadCastPage";
import LiveVideoPage from "./LiveVideoPage/LiveVideoPage/LiveVideoPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, true)} />
        <Route exact path="/register" component={Auth(RegisterPage, null)} />
        <Route exact path="/search" component={Auth(SearchResultPage, null)} />     
        <Route exact path="/broadcast" component={Auth(BroadCastPage, true)} />
        <Route exact path="/broadcastform" component={Auth(BroadCastForm, true)} />
        <Route exact path="/liveVideo/:liveId" component={Auth(LiveVideoPage, true)} />
        <Route exact path="/upload" component={Auth(VideoUploadPage, true)} />
        <Route exact path="/image" component={Auth(ImageUploadPage, true)} />
        <Route exact path="/post/:imageId" component={Auth(PostPage),null}/>
        <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
      </Switch>
    </div>
  )}

export default App;