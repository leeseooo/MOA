import React, { useState } from 'react'
import { Button, Form, Input, DatePicker,message,Pagination } from 'antd';
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { useSelector } from "react-redux";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

function ImageUploadPage(){
    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Introduction, setIntroduction] = useState([]);
    const [Categories, setCategories] = useState("전시")
    const [FilePath, setFilePath] = useState([])
    const [FileName, setFileName] = useState([])
    const [hashtag, setHashTag] = useState("")
    const [dateString, setDateString] = useState("")

    return(
        <div>
            <Form onSubmit>
                <Input
                    style
                    onChange
                    value
                    size
                    placeholder
                /><br/><br />
                <RangePicker
                    onChange
                /><br /><br /><hr /><br />
                <Button size="small" type="primary">이미지</Button>
                <Button size="small">동영상</Button>

                <div>
                    <select onChange>
                        {/* 카테고리  */}
                    </select>
                </div>

                <div>
                    <Dropzone
                        onDrop
                        multiple
                        maxSize
                    >

                    </Dropzone>
                </div>
                <div>
                    {/* 첨부파일명 && 썸네일 */}
                </div>

                <label>본문</label>
                <TextArea
                    onChange
                    value
                    placeholder
                /> <br /><br />
                {/* 해시태그 */}
                <Button type="primary" size="large"
                        onClick>
                            제출
                </Button>
            </Form>
        </div>
    )
}