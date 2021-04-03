import {Fragment} from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import FollowList from "../components/FollowList";
import NicknameEditFrom from "../components/NicknameEditFrom"
const profile = () =>{
    const followerList = [{nickname : '최규혁'},{nickname : '이선제'},{nickname : '신우쌤'}]
    const followingList = [{nickname : '최규혁'},{nickname : '이선제'},{nickname : '신우쌤'}]
    return (
        <Fragment>
            <Head>
                <title>프로필 | Mygun</title>
            </Head>
            <AppLayout>
                <NicknameEditFrom />
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </Fragment>
    )
};

export default profile;