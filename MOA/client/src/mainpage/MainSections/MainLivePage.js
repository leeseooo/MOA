import React, { useEffect, useState } from 'react';
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import Axios from 'axios';
import '../Mainpage.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


function MainLivePage(){
    const [liveVideo, setLiveVideo] = useState([]);

    useEffect(() => {
        Axios.get('/api/liveVideo/getliveVidoes')
        .then(res => {
            if (res.data.success) {
                console.log(res.data);
                setLiveVideo(res.data.liveVideo)
            } else {
                alert("라이브 비디오 가져오기를 실패했습니다.")
            }
        })
    }, [])

    return (
        <div className='mainpage_below' style={{textAlign:'center', backgroundSize:'cover'}} height="100vh">
            
            <p className="streamlive">실시간 방송 LIVE</p>
            <p className="meetinlive">전국의 대학생 활동을 라이브 방송으로 만나보세요</p>
            <AiIcons.AiOutlineLeftSquare size="40" color="#C692B8"  className="livevideoleft"/>
            <AiIcons.AiFillRightSquare size="40" color="#C692B8" className="livevideoright"/>
            <span id="#livevideo" className="livevideo" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                
                {/* {liveRenderCards} */}
                <Carousel arrows>

                </Carousel>
                </div>
            </span>
        </div>
    )
}

export default MainLivePage;