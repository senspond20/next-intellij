import React, {useCallback, useMemo, useState} from 'react';
import { Input, Button, Form} from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from 'prop-types';
const ButtonWrapper = styled.div`
    margin-top : 10px;
`;

// const customStyle = useMemo(()=>{
//     marginTop: 10
// },[]);

 const LoginForm = ({setIsLoggedIn})=>{
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    // useCallback : 함수를 캐싱한다.
    // useMemo : 값을 캐싱한다.
    const onChangeId = useCallback((e)=>{
        setId(e.target.value)
    }, []);

    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value)
    }, []);

    const onSubmitForm = useCallback(() =>{
        // onFinish 에는 e.predf 가 이미 적용되어 있다.
        console.log(id, password)
        setIsLoggedIn(true)
    },[id, password]);

    return(
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </Form>
    );
};

LoginForm.prototype ={
    setIsLoggedIn : PropTypes.func.isRequired,
}
export default LoginForm;