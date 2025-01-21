import React from 'react';
import { Button, Tooltip } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { copyToClipboard } from '@/pages/xyflow/demo06/utils';

export interface AiItemProps {
  label: string;
  value: string;
}

/**
 * @author xu.pengfei
 * @date 2025/1/21 14:07
 */
export default function AiItem({ label, value }: AiItemProps) {
  function handleClickCopy() {
    copyToClipboard(`{{${label}.${value}}}`);
  }

  return (
    <div className="fa-ai-node-item">
      <div>{`${label} {${value}}`}</div>
      <div className="fa-ai-node-item-btn">
        <Tooltip title="复制参数">
          <Button icon={<CopyOutlined />} type="text" onClick={handleClickCopy} />
        </Tooltip>
      </div>
    </div>
  );
}
