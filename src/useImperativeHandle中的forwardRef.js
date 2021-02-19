/*
1.useImperativeHandle 可以在使用ref时自定义的暴露给父组件的实例值.很多情况下,避免使用ref这样的命令试代码
useImperativeHandle与forwardRef一起
useImperativeHandle(ref(传递来的),()=>{},[])

 */
import {forwardRef,useRef} from 'react'
import ReactDOM from 'react-dom';
const Fordward=forwardRef((props,ref)=>{
    return(
        <>
        <h3 ref={ref}>hh</h3>
        <h4>xx</h4>
        </>
    )
});
const InFordward =()=>{
const refs =useRef(null)
return(
    <>
    <Fordward ref={refs}></Fordward>
    <button onClick={()=>{
        console.log(refs.current);
    }}>获取子组件的Dom</button>
    </>
)
}
ReactDOM.render(<InFordward />,document.getElementById("root"));