import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/user_action';


function RegisterPage(props) {
    //디스패치 함수 가져오기
    const dispatch = useDispatch();

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
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert("비밀번호와 비밀번호 확인은 같아야 합니다.")
        }

        //서버로 전달할 state값을 모은 객체
        let body = {
            Id: Id,
            password: Password,
            name: Name,
        }

        //서버로 전달할 임시 프로필 객체
        const profile = {
            id: Id,
            nickName: Name,
            profileImg: "",
            content: "",
        }

        //임시 프로필 저장
        // axios.post('/api/profile/saveProfile', profile)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err.message)
        //     })

        //디스패치
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    //submit시 로그인 페이지로 이동
                    props.history.push('/login')
                }
                else {
                    alert('Error')
                }
            })
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