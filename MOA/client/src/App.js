<<<<<<< HEAD
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './NavBar/Navbar'
import MainPage from './mainpage/Mainpage'
import VideoUploadPage from './VideoUploadPage/VideoUploadPage'
import VideoDetailPage from './VideoDetailPage/VideoDetailPage'
import ImageUploadPage from './ImageUploadPage/ImageUploadPage'
=======
import { Route, Switch } from 'react-router-dom';
import Navbar from './NavBar/Navbar';
import VideoUploadPage from './VideoUploadPage/VideoUploadPage';
import VideoDetailPage from './VideoDetailPage/VideoDetailPage';
import ImageUploadPage from './ImageUploadPage/ImageUploadPage';
import React, { Suspense } from 'react';
import PostPage from "./PostPage";
>>>>>>> 5b0f511f31347beb2e220271e8058455cd2bd852
import RegisterPage from "./RegisterPage/RegisterPage.js";
import LoginPage from "./LoginPage/LoginPage";
import MainPage from"./mainpage/Mainpage";
import SearchResultPage from "./SearchResultPage/SearchResultPage";
import BroadCastForm from "./LiveVideoPage/BroadCastPage/BroadCastForm";
import BroadCastPage from "./LiveVideoPage/BroadCastPage/BroadCastPage";
import LiveVideoPage from "./LiveVideoPage/LiveVideoPage/LiveVideoPage";
import AccountInfoPage from './AccountInfoPage/AccountInfoPage';
import Auth from "./hoc/auth";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '69px' }}>
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null)} />
<<<<<<< HEAD
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/search" component={Auth(SearchResultPage, false)} />     
        <Route exact path="/accountInfo" component={Auth(AccountInfoPage, true)} />     
        {/* <Route exact path="/broadcast" component={Auth(BroadCastPage, null)} /> */}
        {/* <Route exact path="/broadcastform" component={Auth(BroadCastForm, null)} /> */}
        {/* <Route exact path="/liveVideo/:liveId" component={Auth(LiveVideoPage, null)} /> */}
        <Route exact path="/video/upload" component={Auth(VideoUploadPage, null)} />
        <Route exact path="/image/upload" component={Auth(ImageUploadPage, null)} />
        <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
        {/* <Route exact path="/carousel" component={Carouseltest} /> */}
      </Switch>
    </div>
  )}
=======
        <Route exact path="/login" component={Auth(LoginPage, true)} />
        <Route exact path="/register" component={Auth(RegisterPage, null)} />
        <Route exact path="/search" component={Auth(SearchResultPage, null)} />     
        <Route exact path="/broadcast/:broadcastId" component={Auth(BroadCastPage, true)} />
        <Route exact path="/broadcastform" component={Auth(BroadCastForm, true)} />
        <Route exact path="/liveVideo/:liveId" component={Auth(LiveVideoPage, true)} />
        <Route exact path="/upload" component={Auth(VideoUploadPage, true)} />
        <Route exact path="/image" component={Auth(ImageUploadPage, true)} />
        <Route exact path="/post/:imageId" component={Auth(PostPage),null}/>
        <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
      </Switch>
      </div>
    </div>
  )}

>>>>>>> 5b0f511f31347beb2e220271e8058455cd2bd852
export default App;