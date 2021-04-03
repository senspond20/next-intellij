import {useCallback, useState} from "react";
import {Form, Button, Checkbox, Input} from "antd";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import useInput from "../hooks/useInput";
import styled from 'styled-components';

const ErrorMessage = styled.div`
    color:red;
`;

const signup = () =>{
    const [id, onChangedId] = useInput('');
    const [nickname, onChangedNickName] = useInput('');
    const [password, onChangedPassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password)
    }, []);

    const onChangedTerm = useCallback((e)=>{
       setTerm(e.target.value);
       setTermError(false);
    },[]);

    const onSubmit = useCallback(()=>{
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(id, nickname, password);
    },[password,passwordCheck,term])

    return(
        <AppLayout>
            <Head>
                <title>회원 가입 | </title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChanged ={onChangedId}></Input>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nickname} required onChanged ={onChangedNickName}></Input>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" value={password} required onChanged ={onChangedPassword}></Input>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input
                        name ="user-password-check"
                        type ="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-item" checked={term} onChange={onChangedTerm}>말을 잘 들을것을 동의합니다</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다</ErrorMessage> }
                </div>
                <div style={{marginTop : 10}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    )
}
export default signup;