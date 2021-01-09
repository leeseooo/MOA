import React, { useState, useEffect } from 'react';

import './MyBoothStyle.css';


function MyBoothCards() {

    //state
    const [booths, setBooths] = useState([]);
    const [video, setVideo] = useState([]);

    let searched = []

    //const user = useSelector(state => state.user.userData)

    useEffect(() => {
        // const body = {
        //     owner: user.name
        // }

        //검색된 부스 가져오기
        
        //비디오 가져오기
        
    }, [])

    //현재, 예정, 지난 부스로 구분
    const sortBooths = (sort) => {}

    //비디오 정렬 및 레이아웃 생성
    const alignVideo = () => {}

    //부스 레이아웃 잡기
    const boothsLayout = (sort) => {}

    return (
        <div>
            <Divider style={{ margin: "50px 0 70px 0" }}>비디오</Divider>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{ width: "1200px" }}>
                    {alignVideo()}
                </div>
            </div>
            <Divider style={{ margin: "50px 0 70px 0" }}>현재 아트</Divider>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{ width: "1200px" }}>
                    {boothsLayout("current")}
                </div>
            </div>

            <Divider style={{ margin: "50px 0 70px 0" }}>예정 아트</Divider>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{ width: "1200px" }}>
                    {boothsLayout("future")}
                </div>
            </div>
            <Divider style={{ margin: "50px 0 70px 0" }}>지난 아트</Divider>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{ width: "1200px" }}>
                    {boothsLayout("past")}
                </div>
            </div>
        </div>
    )
}

export default MyBoothCards;