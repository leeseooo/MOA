import React , {useEffect, useState} from 'react'
import { List, Avatar, Row, Col, Tag } from 'antd'
import moment from 'moment';
import axios from 'axios'

function VideoDetailPage(props){
    const videoId = props.match.params.videoId
    const [Video, setVideo]=useState([])

    const videoVariable = {videoId : videoId}

    return(
        <Row gutter={[16,16]}>
            <Col lg={18} xs={32}>
                <div style={{ width:'100%', padding:'3rem 4rem'}}>
                    <video style={{width:'100%'}} src={`http://localhost:5000/${Video.filePath}`} />
                    <List.Item>
                        <List.Item.Meta
                            title={<h2>{Video.title}</h2>} />
                            조회수 {Video.views}회
                            <span> {moment(Video.createdAt).format("YYYY-MM-DD")} </span>
                    </List.Item>
                    {/* <List.Item
                        actions={[<LikeDislikes video videoId={videoId} 
                            userId={localStorage.getItem('userId')}  />,
                            <Subscriber usetTo={Video.writer._id} 
                            userFrom={localStorage.getItem('userId')}/>]}>
                    
                        <List.Item.Meta
                            avatar={<Avatar src={Video.writer && Video.writer.image} />}
                            description={Video.writer.name}
                            />
                    </List.Item> */}
                        <List.Item.Meta
                            style={{ marginLeft:'3rem' }}
                            description={Video.description}
                        />
                </div>
            </Col>
        </Row>
    )
}
export default VideoDetailPage;