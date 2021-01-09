import React, { useState } from 'react';
import { Input, Button } from 'antd';

function LoginPage(props) {
    //디스패치 함수 가져오기
    //const dispatch = useDispatch();

    //state 설정
    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")

    //onChange 처리
    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    //onSubmit 처리
    const onSubmitHandler = (event) => {
        // event.preventDefault();

        // console.log('Id', Id)
        // console.log('Password', Password)

        // //서버로 전달할 state값을 모은 객체
        // let body = {
        //     Id: Id,
        //     password: Password,
        // }

        // //디스패치
        // dispatch(loginUser(body))
        //     .then(response => {
        //         if (response.payload.loginSuccess) {
        //             //submit시 홈페이지로 이동
        //             props.history.push('/')
        //         }
        //         else {
        //             alert('Error')
        //         }
        //     })
    }

    return (
        <div>
            <div style={{
                display: "flex", justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 class="mainText">Welcome!</h1>
                    <lable>아이디</lable>
                    <Input value={Id} onChange={onIdHandler} />
                    <lable>비밀번호</lable>
                    <Input type="password" value={Password} onChange={onPasswordHandler} onPressEnter={onSubmitHandler} />
                    <br />
                    <Button>
                        회원가입
                            {/* <Link to="/Register">회원가입</Link> */}
                    </Button>
                    <Button type="primary" onClick={onSubmitHandler}>Login</Button>
                </div>

            </div>
        </div>
    )
}

export default LoginPage;