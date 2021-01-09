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

    let searched = []
    let videoSearched = []

    useEffect(() => {

        let body = {
            query: "test"
        }

        //검색된 이미지 카드(부스) 가져오기
        axios.post("/api/image/search", body)
            .then(response => {
                searched = searched.concat(response.data.image)
                console.log("현재 이미지 카드", searched)
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
<<<<<<< HEAD
        axios.post('/api/video/search', body)
=======
        axios.get('/api/video/getVideos', body)
>>>>>>> fbace1a1f601ccf83c71286fb7d1c75ad7f5ebd0
            .then(res => {
                if (res.data.success) {
                    console.log("현재 비디오", res.data);
                    videoSearched = videoSearched.concat(res.data.video)
                    setVideo(videoSearched)
                    console.log("현재 비디오 state", Video)
                } else {
                    alert("현재 전시 비디오 가져오기를 실패했습니다.")
                }
            })
            .catch(err => {
                console.log("에러 비디오", err.response)
            })

    }, [props.alignType])

    //현재, 예정, 지난 부스로 구분
    const sortBooths = (sort) => {
        var i = 0;
        var now = new Date();

        if (Booths.length === 0) {
            return "err"
        }

        console.log("부스 state 상태", Booths)
        console.log("sort", sort)

        switch (sort) {
            case "current":
                var current = Booths.filter((v) => {
                    var start = new Date(v.startDate)
                    var end = new Date(v.endDate)

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
                    var start = new Date(v.startDate)
                    var end = new Date(v.endDate)

                    if (end.getTime() < now.getTime()) { return v }
                })
                console.log(sort, "booths", past)
                return past

            case "future":
                var future = Booths.filter((v) => {
                    var start = new Date(v.startDate)

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

        console.log("렌더카드 전 비디오 state", Video)

        var renderCards = Video.map((video, index) => {

            let minutes = Math.floor(video.duration / 60);
            let seconds = Math.floor(video.duration - minutes * 60);
            return (
                <Col lg={6} md={8} xs={24} key={index}>
                    <div style={{ position: 'relative' }}>
                        <a href={`/video/${video._id}`}>
                            <img style={{ width: '100%' }} src={`http://localhost:5000/${video.thumbnail}`} alt="thumbnail" />
                            <div style={{
                                bottom: 0, right: 0, position: 'absolute', margin: '4px',
                                color: '#fff', backgroundColor: 'rgba(17, 17, 17, 0.8)', opacity: 0.8,
                                padding: '2px 4px', borderRadius: '2px', letterSpacing: '0.5px', fontSize: '12px',
                                fontWeight: '500', lineHeight: '12px'
                            }}
                            >
                                <span>{minutes} : {seconds}</span>
                            </div>
                        </a>
                    </div>
                    <br />
                    <Card.Meta
                        avatar={<Avatar src={video.writer.image} />}
                        title={video.title}
                    />
                    <span>{video.writer.name}</span><br />
                    <span style={{ marginLeft: '3rem' }}>{video.views} views</span> - <span>{moment(video.createdAt).format("MMM Do YY")}</span>
                </Col>

            )
        })

        console.log("renderCards", renderCards)

        return renderCards
    }

    //부스 정렬
    const alignBooths = (booths) => {
        console.log("align Booths", booths)
        if (booths === "err") { return "err" }

        console.log("change Align", props.alignType)

        switch (props.alignType) {
            
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
            var tmp = sortBooths(sort)
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
                                <p>{_booths[i].startDate} ~ {_booths[i].endDate}</p>
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
                                <p>{_booths[i].startDate} ~ {_booths[i].endDate}</p>


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
                                <p>{_booths[i].startDate} ~ {_booths[i].endDate}</p>


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
                                <p>{_booths[i].startDate} ~ {_booths[i].endDate}</p>


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
                                <p>{_booths[i].startDate} ~ {_booths[i].endDate}</p>


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
                                <p>{_booths[i].startDate} ~ {_booths[i].endDate}</p>


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
                                <p>{_booths[i].startDate} ~ {_booths[i].endDate}</p>


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
                                <p>{_booths[i].startDate} ~ {_booths[i].endDate}</p>

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
                                <p>{_booths[i].startDate} ~ {_booths[i].endDate}</p>


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
                                <p>{_booths[i].startDate} ~ {_booths[i].endDate}</p>


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