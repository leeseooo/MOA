import React , {useEffect, useState} from 'react'
import { List, Avatar, Row, Col, Tag } from 'antd'
import moment from 'moment';
import SideVideo from './Sections/SideVideo'
import Comment from './Sections/Comment'
import Subscriber from './Sections/Subscriber'
import axios from 'axios'

function VideoDetailPage(props){
    const videoId = props.match.params.videoId
    const [Video, setVideo]=useState([])
    const [CommentLists, setCommentLists] = useState([])

    const videoVariable = {videoId : videoId}

    const updateComment = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }

    useEffect(() => {
        axios.post('/api/video/getVideoDetail', videoVariable)
            .then(response => {
                if (response.data.success) {
                    setVideo(response.data.video)
                } else {
                    alert('Failed to get video Info')
                }
            })
    
        axios.post('/api/comment/getComments', videoVariable)
            .then(response => {
                if (response.data.success) {
                    console.log('response.data.comments',response.data.comments)
                    setCommentLists(response.data.comments)
                } else {
                    alert('Failed to get video Info')
                }
            })
    
    
      }, [])

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
                    {Video.startDate} ~ {Video.endDate}
                    <Tag style={{ marginLeft:'3rem'}}>
                        {Image.tag !== '' && (<div>{Image.tags}해시태그자리</div>)}
                    </Tag><hr/>
                    <Comment CommentList={CommentLists} postId={Video._id} refreshFunction={updateComment}/>
                </div>
            </Col>
            <Col lg={6} xs={24}>
                <SideVideo />
            </Col>
        </Row>
    )
}
export default VideoDetailPage;