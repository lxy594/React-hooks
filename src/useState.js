import React, { useState } from "react";
import ReactDOM from 'react-dom';
const Index = () => {
    //count 在组件每次被调用时都会发生变化，setCount 用于修改 count 的值，每次修改后都会触发 Count 组件的重新渲染
    const [count, setCound] = useState(0)
    const [obj, setObj] = useState({ name: 'lxy' });
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => (setCound(count + 1))}>add_num</button>

            <p>{obj.name}</p>
            <button onClick={() => (setObj({ name: 'zhuzhu' }))}>点击切换</button>
        </>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

