import { useRef } from 'react'
import ReactDOM from 'react-dom';
import { Input, TextField, Divider, Button } from '@material-ui/core';
/*
1.useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传递的参数.

*/
const InuseRef = () => {
  const inputEl = useRef(null);
  const save = useRef({ value: '123' })

  return (
    <>
      <TextField required id="standard-required" label="useRef" defaultValue="useRef" />
      <Input type="text" inputRef={inputEl} fullWidth />
      <Divider />

      {/* 通过按钮获取到输入的东西 */}
      <Button variant="contained" onClick={() => {
        save.current.value = inputEl.current.value;
        console.log(save.current.value);

      }}
      >获取ref</Button>
    </>
  )
}
ReactDOM.render(<InuseRef />, document.getElementById("root"));