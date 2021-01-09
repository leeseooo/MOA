import React, {useEffect, useState} from 'react'
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from 'axios';

import moment from 'moment';
const { Title } = Typography;
const { Meta } = Card;

function LandingPage() {
  const Category = [
      { value: 0, label: "날짜순" },
      { value: 1, label: "가나다순" }
  ]

const [Video, setVideo] = useState([])
const [Image, setImage] = useState([])
const [Categories, setCategories] = useState("날짜순")

const handleChangeOne = (event) => {
  setCategories(event.currentTarget.value)
}

  useEffect(() => {
    axios.get('/api/video/getVideos')
    .then(response => {
      if(response.data.success){
          setVideo(response.data.videos)
      }else{
        alert('비디오 가져오기를 실패했습니다.');
      }
    })
    axios.get('/api/image/getImages')
    .then(response => {
      if(response.data.success){
          setImage(response.data.images)
      }else{
        alert('image 가져오기를 실패했습니다.');
      }
    })
  }, [])

  const renderCards = Video.map((video, index)=>{
    var minutes = Math.floor(video.duration / 60);
    var seconds = Math.floor(video.duration - minutes * 60);

    return <Col lg={6} md={8} xs={24} key={index}>
            <div style={{ position: 'relative' }}>
                <a href={`/video/${video._id}`} >
                <img style={{ width: '100%' }} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`} />
                <div className=" duration"
                    style={{ bottom: 0, right:0, position: 'absolute', margin: '4px',
                    color: '#fff', backgroundColor: 'rgba(17, 17, 17, 0.8)', opacity: 0.8,
                    padding: '2px 4px', borderRadius:'2px', letterSpacing:'0.5px', fontSize:'12px',
                    fontWeight:'500', lineHeight:'12px' }}>
                    <span>{minutes} : {seconds}</span>
                </div>
                </a>
            </div><br />
            <Meta
                avatar={
                    <Avatar src={video.writer.image} />
                }
                title={video.title}
            />
            <span>{video.writer.name} </span><br />
            <span style={{ marginLeft: '3rem' }}> {video.views}</span>
            - <span> {moment(video.createdAt).format("MMM Do YY")} </span>
        </Col>
  })
  const renderImageCards = Image.map((image, index)=>{
    return <Col lg={6} md={8} xs={24} key={index}>
            <div style={{ position: 'relative' }}>
                <a href={`/post/${image._id}`} >
                <img style={{ width: '100%' }} src={`http://localhost:5000/${image.filePath[0]}`}/>
                <div className=" duration"
                    style={{ bottom: 0, right:0, position: 'absolute', margin: '4px',
                    color: '#fff', backgroundColor: 'rgba(17, 17, 17, 0.8)', opacity: 0.8,
                    padding: '2px 4px', borderRadius:'2px', letterSpacing:'0.5px', fontSize:'12px',
                    fontWeight:'500', lineHeight:'12px' }}>
                </div>
                </a>
            </div><br />
            <Meta
                avatar={
                    <Avatar src={image.writer.image} />
                }
                title={image.title}
            />
            <span>{image.writer.name} </span><br />
            <span style={{ marginLeft: '3rem' }}> {image.views}</span>
            - <span> {moment(image.createdAt).format("MMM Do YY")} </span>
        </Col>
  })

    return (
        <div style={{width : '85%', margin: '3rem auto'}}>
          <select onChange={handleChangeOne}>
                  {Category.map((item, index) => (
                      <option key={index} value={item.value}>{item.label}</option>
                  ))}
          </select><br/><br/>
          <div className="hr-sect"><Title level={4} >전시</Title></div>
          <br/>
          <Row gutter={[32,16]}>
              {renderImageCards}
            </Row>
            <br/>
            <div className="hr-sect"><Title level={4} >영상</Title></div>
           <br/>
           <Row gutter={[32,16]}>
              {renderCards}
            </Row>
            <br/>
        </div>
    )
}

export default LandingPage
