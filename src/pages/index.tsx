import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ConfigProvider, DatePicker, Radio } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';

// 国际化
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';

export default function App() {
  const [theme, setTheme] = useState('default');
  const [local, setLocal] = useState('enUS');

  useEffect(() => {
    setTheme('default');
  }, []);

  function changeTheme(v: string) {
    setTheme(v);

    ConfigProvider.config({
      theme: {
        primaryColor: v === 'default' ? '#1890FF' : '#25b864',
      },
    });
  }

  function changeLocal(v: string) {
    setLocal(v);
  }

  return (
    <ConfigProvider locale={local === 'zhCN' ? zhCN : enUS}>
      <div className="fa-p12">
        <div>
          <p>index.tsx</p>
          <Link to="/blog">blog</Link> |<Link to="/xxx">not exists</Link>
          <div className="fa-flex-column">
            <Link to="/xyflow/demo01">xyflow/demo01</Link>
            <Link to="/xyflow/demo02">xyflow/demo02</Link>
            <Link to="/xyflow/demo03">xyflow/demo03</Link>
            <Link to="/xyflow/demo04">xyflow/demo04</Link>
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <Radio.Group
            options={[
              { label: 'default', value: 'default' },
              { label: 'green', value: 'green' },
            ]}
            onChange={(e) => changeTheme(e.target.value)}
            value={theme}
            optionType="button"
            buttonStyle="solid"
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Radio.Group
            options={[
              { label: 'English', value: 'enUS' },
              { label: '中文', value: 'zhCN' },
            ]}
            onChange={(e) => changeLocal(e.target.value)}
            value={local}
            optionType="button"
            buttonStyle="solid"
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Button type="primary" icon={<HeartOutlined />}>
            Hello
          </Button>
        </div>

        <div style={{ marginTop: 12 }}>
          <DatePicker />
        </div>

        <div style={{ marginTop: 24 }}>
          <span className="foo">SCSS</span>
        </div>
      </div>
    </ConfigProvider>
  );
}
