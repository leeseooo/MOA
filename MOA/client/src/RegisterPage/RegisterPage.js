import React, { useState } from 'react';
import { Input, Button } from 'antd';

function RegisterPage() {
    //state 설정
    const [Id, setId] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    //onChange 처리
    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    //onSubmit 처리(서버전달)
    const onSubmitHandler = (event) => {

    }

    return (
        <div style={{
            display: "flex", justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img style={{ width: "250px", margin: "20px 0" }} src="" />
                <p style={{ color: "grey", margin: "0 0 70px 0" }}>
                    모아에서 더 많은 활동을 감상하세요!
                </p>

                <label>아이디</label>
                <Input value={Id} placeholder="아이디" onChange={onIdHandler} />

                <label>이름</label>
                <Input type="text" value={Name} placeholder="이름" onChange={onNameHandler} />

                <label>비밀번호</label>
                <Input type="password" value={Password} placeholder="비밀번호" onChange={onPasswordHandler} />

                <label>비밀번호 확인</label>
                <Input type="password" value={ConfirmPassword} placeholder="이름" onChange={onConfirmPasswordHandler} />

                <br />

                <Button type="primary" onClick={onSubmitHandler}>가입하기</Button>
            </div>
        </div>
    )
}

export default RegisterPage;