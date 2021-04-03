import {Fragment} from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const signup = () =>{
    return(
        <Fragment>
            <Head>
                <title>회원 가입</title>
            </Head>
            <AppLayout>회원 가입</AppLayout>
        </Fragment>
    )
}
export default signup;