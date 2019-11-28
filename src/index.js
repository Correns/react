import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, ConfigProvider, message, Alert , Button} from 'antd';
// import zhCn from 'antd/es/locale/zh_CN.js';
import moment from 'moment';
// import 'moment/locale/zh-cn';
// import 'antd/dist/antd.css';
// import './mainTopo.css';

moment.locale('zh-cn');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null };
  }
  handleChange = date => {
    message.info(`您选择的日期是:${date ? date.format('YYYY-MM-DD') : '未选择'}`);
    this.setState({ date });
  };
  render() {
    const { date } = this.state;
    return (  
      <ConfigProvider>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={this.handleChange} />
          <div style={{ marginTop: 20 }}>
            当前时间:{date ? date.format('YYYY-MM-DD') : '未选择'}
            <Alert message={`当前日期：${date ? date.format('YYYY-MM-DD') : '未选择'}`} type="success" />
          </div>
        </div>
        <div>
          <Button type='primary'>primary</Button>
          <Button type='link'>link</Button>
          <Button type='danger'>danger</Button>
          <Button type='dashed'>dashed</Button>
          <Button type='ghost'>ghost</Button>
          <Button type='default'>default</Button>
        </div>
      </ConfigProvider>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
