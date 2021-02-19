import { useRef, createContext, useState, useContext } from 'react'
import ReactDOM from 'react-dom';
import { Input, Divider, Button } from '@material-ui/core';
/*
1.useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传递的参数.
2.子传父
*/
// 创建一个容器
const MyContext = createContext()

// 创建子组件
const Childcontext = () => {
  let count = useContext(MyContext)
  return (
    <p>我是子组件{count}</p>
  )
}
const InuseRef = () => {
  let [count, setCount] = useState(0)
  const inputEl = useRef(null);
  // const save = useRef({ value: '123' })

  return (
    <>
      <MyContext.Provider value={count} >
        <Childcontext />
      </MyContext.Provider>
      <Input type="text" inputRef={inputEl} fullWidth />
      <Divider />

      {/* 通过按钮获取到输入的东西 */}
      <Button variant="contained" onClick={() => {
        // save.current.value = inputEl.current.value;
        // console.log(save.current.value);
        setCount(inputEl.current.value);

      }}
      >获取在组件</Button>
    </>
  )
}
ReactDOM.render(<InuseRef />, document.getElementById("root"));