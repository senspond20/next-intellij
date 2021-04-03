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