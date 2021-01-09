import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Divider, Avatar } from 'antd';

import "antd/dist/antd.css";

//날짜를 0000-00-00 이런식으로 필터링 해줄것
//정렬 추천순은 좋아요가 없어서 구현 안됨
function ResultBooths(props) {

    //state
    const [Booths, setBooths] = useState([]);
    const [video, setVideo] = useState([]);

    let searched = []

    useEffect(() => {

        const body = {
            query: "test"
        }

        //검색된 부스 가져오기
        

        //비디오 가져오기
       

    }, [props.alignType])

    //현재, 예정, 지난 부스로 구분
    const sortBooths = (sort) => {}

    //비디오 정렬 및 레이아웃 생성
    const alignVideo = () => {}

    //부스 정렬
    const alignBooths = (booths) => {}

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

export default ResultBooths;