import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Divider, Avatar } from 'antd';
import axios from 'axios';
import moment from 'moment';
import "antd/dist/antd.css";

const { Meta } = Card;
//날짜를 0000-00-00 이런식으로 필터링 해줄것
//정렬 추천순은 좋아요가 없어서 구현 안됨
function ResultBooths(props) {

    //state
    const [Booths, setBooths] = useState([]);
    const [Video, setVideo] = useState([]);
    const [Image, setImage] = useState([])

    let searched = []

    useEffect(() => {

        const body = {
            query: "image"
        }

        //검색된 부스 가져오기
        axios.post("/api/image/getImages", body)
            .then(response => {
                searched = searched.concat(response.data.booth)
                console.log("searched", searched)

                if (searched.length !== 0) {
                    setBooths(searched)
                }

            })
            .catch(err => {
                if(err.response){
                    console.log(err.message)
                }
            })

        //비디오 가져오기
        axios.post('/api/video/getVidoes', body)
            .then(res => {
                if (res.data.success) {
                    console.log("현재 비디오", res.data);
                    setVideo(res.data.videos)
                } else {
                    alert("현재 전시 비디오 가져오기를 실패했습니다.")
                }
            })

        // axios.get('/api/image/getImages')
        //     .then(response => {
        //       if(response.data.success){
        //           setImage(response.data.images)
        //       }else{
        //         alert('image 가져오기를 실패했습니다.');
        //       }
        //     })

    }, [props.alignType])

    //현재, 예정, 지난 부스로 구분
    const sortBooths = (sort) => {
        var i = 0;
        var now = new Date();

        if (Booths.length === 0) {
            return "err"
        }

        switch (sort) {
            case "current":
                var current = Booths.filter((v) => {
                    var start = new Date(v.boothStart)
                    var end = new Date(v.boothEnd)

                    if (start.getTime() < now.getTime()) {
                        if (end.getTime() > now.getTime()) {
                            return v;
                        } else if (end.getTime() === now.getTime()) {
                            return v;
                        }
                    } else if (start.getTime() === now.getTime()) {
                        if (end.getTime() > now.getTime()) {
                            return v;
                        } else if (end.getTime() === now.getTime()) {
                            return v;
                        }
                    }
                })
                console.log(sort, "booths", current)
                return current

            case "past":
                var past = Booths.filter((v) => {
                    var start = new Date(v.boothStart)
                    var end = new Date(v.boothEnd)

                    if (end.getTime() < now.getTime()) { return v }
                })
                console.log(sort, "booths", past)
                return past

            case "future":
                var future = Booths.filter((v) => {
                    var start = new Date(v.boothStart)

                    if (start.getTime() > now.getTime()) {
                        return v;
                    }
                })
                console.log(sort, "booths", future)
                return future
        }

    }

    //비디오 정렬 및 레이아웃 생성
    const alignVideo = () => {
        switch (props.alignType) {
            case "recommend":
                break;
            case "date":
                Video.sort(function (a, b) {
                    return a.createAt < b.createAt ? -1 : a.createAt > b.createAt ? 1 : 0;
                })
                break;
            case "name":
                Video.sort(function (a, b) {
                    return a.title < b.title ? -1 : a > b ? 1 : 0;
                })
                break;
        }
    }
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
                    - <span> {moment(video.createdAt).format("YYYY-MM-DD")} </span>
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
                    - <span> {moment(image.createdAt).format("YYYY-MM-DD")} </span>
                </Col>
          })

    //부스 정렬
    const alignBooths = (booths) => {
        console.log("align Booths", booths)
        if (booths === "err") { return "err" }

        console.log("change Align", props.alignType)

        switch (props.alignType) {
            case "recommend":
                booths.sort(function (a, b) {

                    var aLike = 0
                    var bLike = 0

                    let body = {
                        boothId: a._id
                    }

                    axios.post('api/like/getLikes', body)
                        .then(res => {
                            aLike = res.data.likes.length
                        })

                    body = {
                        boothId: b._id
                    }

                    axios.post('api/like/getLikes', body)
                        .then(res => {
                            bLike = res.data.likes.length
                        })


                })
                break;
            case "date":
                booths.sort(function (a, b) {
                    let aDate = new Date(a.boothStart)
                    let bDate = new Date(b.boothStart)

                    return aDate < bDate ? -1 : aDate > bDate ? 1 : 0;
                })
                break;
            case "name":
                booths.sort(function (a, b) {
                    return a.title < b.title ? -1 : a > b ? 1 : 0;
                })
                break;
        }
        return booths
    }

    //부스 레이아웃 잡기
    const boothsLayout = (sort) => {
        var i = 0;
        var boothCards = [];
        var _booths = [];

        if (sort === "current") {
            var tmp = sortBooths(sort, Booths)
            _booths = alignBooths(tmp)
        } else if (sort === "future") {
            var tmp = sortBooths(sort, Booths)
            _booths = alignBooths(tmp)
        } else {
            var tmp = sortBooths(sort, Booths)
            _booths = alignBooths(tmp)
        }


        console.log("_booths", _booths)

        if (_booths === "err") {
            return
        }

        while (i < _booths.length) {

            if (_booths.length - i > 3) {

                boothCards.push(
                    <Row justify="space-around" gutter={[0, 80]}>
                        <Col>
                            <Card
                                hoverable
                                style={{ width: 200, borderBottom: "1px solid black" }}
                                cover={<img alt={_booths[i].title} src={_booths[i].src} class="Preview" />}
                                bordered={false}
                            >
                                <p>{_booths[i].title}</p>
                                <p>{_booths[i].boothStart} ~ {_booths[i].boothEnd}</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                hoverable
                                style={{ width: 200, borderBottom: "1px solid black" }}
                                cover={<img alt={_booths[i + 1].title} src={_booths[i + 1].src} class="Preview" />}
                                bordered={false}
                            >
                                <p>{_booths[i + 1].title}</p>
                                <p>{_booths[i + 1].boothStart} ~ {_booths[i + 1].boothEnd}</p>

                            </Card>
                        </Col>
                        <Col>
                            <Card
                                hoverable
                                style={{ width: 200, borderBottom: "1px solid black" }}
                                cover={<img alt={_booths[i + 2].title} src={_booths[i + 2].src} class="Preview" />}
                                bordered={false}
                            >
                                <p>{_booths[i + 2].title}</p>
                                <p>{_booths[i + 2].boothStart} ~ {_booths[i + 2].boothEnd}</p>

                            </Card>
                        </Col>
                        <Col>
                            <Card
                                hoverable
                                style={{ width: 200, borderBottom: "1px solid black" }}
                                cover={<img alt={_booths[i + 3].title} src={_booths[i + 3].src} class="Preview" />}
                                bordered={false}
                            >
                                <p>{_booths[i + 3].title}</p>
                                <p>{_booths[i + 3].boothStart} ~ {_booths[i + 3].boothEnd}</p>

                            </Card>
                        </Col>
                    </Row>
                )
            }
            else if (_booths.length - i === 3) {
                boothCards.push(
                    <Row justify="space-around" gutter={[0, 80]}>
                        <Col>
                            <Card
                                hoverable
                                style={{ width: 200, borderBottom: "1px solid black" }}
                                cover={<img alt={_booths[i].title} src={_booths[i].src} class="Preview" />}
                                bordered={false}
                            >
                                <p>{_booths[i].title}</p>
                                <p>{_booths[i].boothStart} ~ {_booths[i].boothEnd}</p>

                            </Card>
                        </Col>
                        <Col>
                            <Card
                                hoverable
                                style={{ width: 200, borderBottom: "1px solid black" }}
                                cover={<img alt={_booths[i + 1].title} src={_booths[i + 1].src} class="Preview" />}
                                bordered={false}
                            >
                                <p>{_booths[i + 1].title}</p>
                                <p>{_booths[i + 1].boothStart} ~ {_booths[i + 1].boothEnd}</p>

                            </Card>
                        </Col>
                        <Col>
                            <Card
                                hoverable
                                style={{ width: 200, borderBottom: "1px solid black" }}
                                cover={<img alt={_booths[i + 2].title} src={_booths[i + 2].src} class="Preview" />}
                                bordered={false}
                            >
                                <p>{_booths[i + 2].title}</p>
                                <p>{_booths[i + 2].boothStart} ~ {_booths[i + 2].boothEnd}</p>

                            </Card>
                        </Col>
                        <Col>
                            <Card bordered={false} style={{ width: 200 }} />
                        </Col>
                    </Row>
                )
            }
            else if (_booths.length - i === 2) {
                boothCards.push(
                    <Row justify="space-around" gutter={[0, 80]}>
                        <Col>
                            <Card
                                hoverable
                                style={{ width: 200, borderBottom: "1px solid black" }}
                                cover={<img alt={_booths[i].title} src={_booths[i].src} class="Preview" />}
                                bordered={false}
                            >
                                <p>{_booths[i].title}</p>
                                <p>{_booths[i].boothStart} ~ {_booths[i].boothEnd}</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                hoverable
                                style={{ width: 200, borderBottom: "1px solid black" }}
                                cover={<img alt={_booths[i + 1].title} src={_booths[i + 1].src} class="Preview" />}
                                bordered={false}
                            >
                                <p>{_booths[i + 1].title}</p>
                                <p>{_booths[i + 1].boothStart} ~ {_booths[i + 1].boothEnd}</p>

                            </Card>
                        </Col>
                        <Col>
                            <Card bordered={false} style={{ width: 200 }} />
                        </Col>
                        <Col>
                            <Card bordered={false} style={{ width: 200 }} />
                        </Col>
                    </Row>
                )
            }
            else if (_booths.length - i === 1) {
                boothCards.push(
                    <Row justify="space-around" gutter={[0, 80]}>
                        <Col>
                            <Card
                                hoverable
                                style={{ width: 200, borderBottom: "1px solid black" }}
                                cover={<img alt={_booths[i].title} src={_booths[i].src} class="Preview" />}
                                bordered={false}
                            >
                                <p>{_booths[i].title}</p>
                                <p>{_booths[i].boothStart} ~ {_booths[i].boothEnd}</p>

                            </Card>
                        </Col>
                        <Col>
                            <Card bordered={false} style={{ width: 200 }} />
                        </Col>
                        <Col>
                            <Card bordered={false} style={{ width: 200 }} />
                        </Col>
                        <Col>
                            <Card bordered={false} style={{ width: 200 }} />
                        </Col>
                    </Row>
                )
            }
            i = i + 4;
        };
        return boothCards;
    }

    return (
        <div>
            <Divider style={{ margin: "50px 0 70px 0" }}>비디오</Divider>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{ width: "1200px" }}>
                    {alignVideo()}{renderCards}
                </div>
            </div>
            <Divider style={{ margin: "50px 0 70px 0" }}>현재 아트</Divider>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{ width: "1200px" }}>
                    {boothsLayout("current")}{renderImageCards}
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