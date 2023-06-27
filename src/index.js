import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DzxBtn from "./button";
// const App = (props) => <h1>欢迎进入react的世界</h1>;

// 子组件
class Children1 extends Component {
  render() {
    // 绑定行内样式 注意这里的两个括号，第一个表示我们在要JSX里插入JS了，第二个是对象的括号
    return (
      <h2 style={{ fontSize: "12px", color: "blue" }}>这是children1组件</h2>
    );
  }
}
class Children2 extends Component {
  render() {
    return (
      <>
        <h2 style={{ color: "red" }}>这是children2组件</h2>
        <h2 style={{ color: "pink" }}>{this.props.children}</h2>
      </>
    );
  }
}
// 使用剪头函数创建组件，并使用props传属性
const Children3 = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <h3>箭头函数父传属性 {props.name}</h3>
      <h3> {props.children} </h3>
    </div>
  );
};
Children3.defaultProps = {
  name: "默认值",
};
// 以class的方式创建组件
class App extends Component {
  render() {
    return (
      <Fragment>
        {/* 注意这里得用this.props.name, 必须用this.props */}
        <h1 className="testName">
          欢迎进入react的世界 props: {this.props.name}
        </h1>
        <Children1 />
        <Children2>嵌套组件文字测试</Children2>
        <Children3 name="test">剪头函数嵌套子组件</Children3>
        <DzxBtn size="middle">测试权重</DzxBtn>
      </Fragment>
    );
  }
}

// * react 18.0.0版本挂载节点
ReactDOM.createRoot(document.getElementById("root"))
  .render(
  // react组件调用方式，自定义组件开头必须大写，否则报错。ps：有可能是为了区分原生组件
  <App name="firstReactApp" />
);
// * 18.0.0版本之前
// ReactDOM.render(
// 	<App/>,
//   document.getElementById('root')
// )