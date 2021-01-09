import React, { useState, useEffect } from 'react'
import { Button, Form, message, Input, DatePicker } from 'antd'
import { Link } from 'react-router-dom'

function VideoUploadPage(){
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
                <Button size="small">이미지</Button>
                <Button size="small" type="primary">동영상</Button>

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
export default VideoUploadPage;