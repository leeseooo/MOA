import React, { useRef } from 'react';
import { Row, Col, Card } from 'antd';
import moment from 'moment'
import Axios from 'axios';
import { Carousel, Skeleton } from 'antd';
import { UpSquareFilled, DownSquareOutlined, LikeOutlined } from '@ant-design/icons';
import '../Mainpage.css';
import './CurrentExhibitPage.css'
import poster from '../pictures/poster.jpg';
import poster1 from '../pictures/poster1.jpg';
import poster2 from '../pictures/poster2.jpg';
import poster3 from '../pictures/poster3.jpg';
import poster4 from '../pictures/poster4.jpg';
import poster5 from '../pictures/poster5.jpg';
import poster6 from '../pictures/poster6.jpg';
import poster7 from '../pictures/poster7.jpg';
import poster8 from '../pictures/poster8.jpg';
import poster9 from '../pictures/poster9.jpg';
import poster10 from '../pictures/poster10.jpg';
import poster11 from '../pictures/poster11.jpg';


function CurrentExhibitPage() {

    const urls = [poster, poster1, poster2, poster, poster4, poster5, poster6, poster7, poster8, poster3, poster9, poster10, poster11, poster, poster1, poster2, poster, poster4, poster5, poster6, poster7, poster8, poster3, poster9, poster10, poster11,];
    //const urls = [poster, poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster];

    const sliderRef = useRef();

    const cards = urls.map((url, index) => (
        
        <Col lg={8} md={8} xs={24}>
        
        <Card
            key={index}
            hoverable
            className='previewCard'
            cover={<img alt='전시회' src={url} className='cardImg' />}
            bordered={false}
        >
            <div className='cardTitle'>2021 동양화 창작 '사군자' 전시</div>
            <div className='cardInfo'>연합 취미동양화동아리 '한붓그리기'<br/>12기 정기 작품 전시회</div>
            <hr className='cardLine' />
            <div className='cardMeta'>
                <LikeOutlined style={{ fontSize: '12px', color: '#6E6E6E', marginTop: '1px' }} />
                <div style={{ fontSize: '5px', marginLeft: '2px' }}>125</div>
                <div className='metaDate'>21.01.17 ~ 21.01.21</div>
            </div>
        </Card>
        
        </Col>
        
    ))

    const skeletonCard = (
        <Col lg={8} md={8} xs={24}>
        
        <Card
            hoverable
            className='previewCard'
            bordered={false}
        >
            <Skeleton active />
            <Skeleton active />
            <Skeleton active title={false} paragraph={{ rows: 3 }}/>
        </Card>
        
        </Col>
    )

    const handleCards = () => {
        let cardsArray = [];
        let cardsQuot = cards.length - (cards.length % 3);
        console.log(cardsQuot)
        for (let i = 0; i < cardsQuot; i+=3) {
            cardsArray.push(
                <div>
                <Row gutter={[16, 16]}>
                    {skeletonCard}
                    {skeletonCard}
                    {skeletonCard}
                    {cards[i]}
                    {cards[i+1]}
                    {cards[i+2]}
                    {skeletonCard}
                    {skeletonCard}
                    {skeletonCard}
                </Row>
                </div>    
            )
        }
        return cardsArray;
    }

    const renderCards = handleCards();
    
    const handleCarousel = (mode) => {
        if (mode) {
            sliderRef.current.next();
        } else {
            sliderRef.current.prev();
        }
    }


    return (
           
        <div className='currentExhibitBack'>
            <div className='letterWrapper'>
                <div className='exhibitBoldLetter'>현재 전시</div>
                <div>전국의 다양한 대학생 전시 작품들을 <br/> 확인하고 감상하세요</div>
            </div>    
            <div className='scrollPointerWrapper'>
                <UpSquareFilled style={{ fontSize:'2rem', color: "#49c2cb", background: 'white' }} onClick={()=>{handleCarousel(false)}} />
                <DownSquareOutlined style={{ fontSize:'2rem', color: "#49c2cb", background: 'white', borderStyle: 'none' }} onClick={()=>{handleCarousel(true)}} />
            </div>       
            <div className='cardWrapper'>
                <Carousel dotPosition='left' dots={false} ref={sliderRef}>
                {renderCards}
                {console.log(renderCards)}
                </Carousel>
            </div>           
        </div>
    )
}

export default CurrentExhibitPage