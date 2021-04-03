import {Fragment} from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const profile = () =>{
    return (
        <Fragment>
            <Head>
                <title>프로필 </title>
            </Head>
            <AppLayout>내 프로필</AppLayout>
        </Fragment>
    )
};

export default profile;