import prototype from 'prop-types'
import 'antd/dist/antd.css'
import Head from "next/head";
import {Fragment} from "react";

// 완전 다 공통
const App = ({Component}) => {
    return (
        <Fragment>
            <Head>
                <meta charSet="UTF-8"/>
                <title>Hello, Next!</title>
            </Head>
            <Component />
        </Fragment>
    )
};
App.prototype = {
    Component : prototype.elementType.isRequired,
}
export default App;