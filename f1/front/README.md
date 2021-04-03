# F1

```js
npm i next@9

npm i react react-dom

npm i prop-types
```

```js
import {Fragment} from "react";
import  prototype from "prop-types"
// typescript 를 사용하지 않기 때문에 prototype를 사용

const AppLayout = ({ children }) =>{
    return (
        <Fragment>
            <div>공통 메뉴</div>
            {children}
        </Fragment>
    );
}

AppLayout.prototype = {
    Children : prototype.node.isRequired,
};

export default AppLayout;
```

eslint 설치 -D 개발용으로만
```
npm i eslint -D
npm i eslint-plugin-react-hooks -D
```

.eslintrc 파일을 만든다.


npmtrends에서 트랜드 

```js
npm i antd styled-components @ant-desgin/icons
```

가로먼저 ->세로먼저
모바일->태블릿->데스크탑->

인라인 스타일시 리랜러딩 현상
가상돔이 새로 바뀐 부분을 검사하면서 객체가 있으면 리랜더링하기 떄문에
최적화가 좋지 못하다.

styledComponents로 정의를 해주던가
