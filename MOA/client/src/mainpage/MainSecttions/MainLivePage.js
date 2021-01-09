import React, { useEffect, useState } from 'react';
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import Axios from 'axios';
import '../MainPage.css';

function MainLivePage(){
    return (
        <div className='mainpage_below' style={{textAlign:'center', backgroundSize:'cover'}} height="100vh">
            
            <p className="streamlive">실시간 방송 LIVE</p>
            <p className="meetinlive">전국의 대학생 활동을 라이브 방송으로 만나보세요</p>
            <AiIcons.AiOutlineLeftSquare size="40" color="#C692B8"  className="livevideoleft"/>
            <AiIcons.AiFillRightSquare size="40" color="#C692B8" className="livevideoright"/>
            <span id="#livevideo" className="livevideo" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                
                {/* {liveRenderCards} */}
                </div>
            </span>
        </div>
    )
}