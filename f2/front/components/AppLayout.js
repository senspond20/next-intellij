import React,{ useState, Fragment} from "react";
import prototype from "prop-types"
import Link from "next/link";
// typescript 를 사용하지 않기 때문에 prototype를 사용
import {Menu, Input, Row, Col} from 'antd';
import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;
const AppLayout = ({ children }) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Fragment>
            <Menu mode={"horizontal"}>
                <Menu.Item>
                    <Link href ="/"><a>대시보드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href ="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href ="/signup"><a>회원 가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn ={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                    왼족메뉴
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6} >
                    <a href="http://www.senspot.com" target="_blank" rel="noreferrer noopner">Made By Gun</a>
                </Col>
            </Row>
        </Fragment>
    );
}

AppLayout.prototype = {
    Children : prototype.node.isRequired,
};

export default AppLayout;
