// React : 框架核心包
// ReactDom 专门做渲染相关的包
import React from 'react';
import ReactDOM from 'react-dom/client';
// 应用的全局样式文件
import './index.css';
// 引入跟组件
import App from './App';

// 渲染跟组件APP到一个id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// 严格模式节点需要去掉
	// useEffect的执行时机
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
