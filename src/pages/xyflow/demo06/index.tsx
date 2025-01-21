import React from 'react';
import './index.scss';
import DndLayout from './layout/dnd/DndLayout';
import AiFlow from './AiFlow';
import { ConfigProvider } from 'antd';

/**
 * @author xu.pengfei
 * @date 2025/1/21 10:39
 */
export default function index() {
  return (
    <ConfigProvider getPopupContainer={(triggerNode) => triggerNode?.parentNode as HTMLElement}>
      <DndLayout>
        <AiFlow />
      </DndLayout>
    </ConfigProvider>
  );
}
