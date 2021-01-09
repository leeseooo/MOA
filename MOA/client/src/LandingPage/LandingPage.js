import React from 'react'
import axios from 'axios';
import { Card, Avatar, Col, Typography, Row} from 'antd';

const { Title } = Typography;

function LandingPage(){
    return(
        <div>
            <select >
                {/* 카테고리 */}
            </select><br /><br />
            <div>
                <Title>전시</Title>
            </div><br/>
            <Row>
                이미지 카드 부분
            </Row>
            <br/>
            
            <div>
                <Title>영상</Title>
            </div>
            <br/>
            <Row>
                영상 카드 부분
            </Row>
            <br />
        </div>
    )
}
export default LandingPage;