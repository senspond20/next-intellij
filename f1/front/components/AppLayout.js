import {Fragment} from "react";
import prototype from "prop-types"
import Link from "next/link";
// typescript 를 사용하지 않기 때문에 prototype를 사용

const AppLayout = ({ children }) =>{
    return (
        <Fragment>
            <nav>
                <Link href ="/"><a>노드버드</a></Link>
                <Link href ="/profile"><a>프로필</a></Link>
                <Link href ="/signup"><a>About</a></Link>
            </nav>
            {children}
        </Fragment>
    );
}

AppLayout.prototype = {
    Children : prototype.node.isRequired,
};

export default AppLayout;
