import React, { ReactNode, useState } from 'react';
import { Modal } from 'antd';

export interface AiChatLlmAddModalProps {
  children: ReactNode;
  onSuccess?: () => void;
}

/**
 * @author xu.pengfei
 * @date 2025/1/21 22:11
 */
export default function AiChatLlmAddModal({ children, onSuccess }: AiChatLlmAddModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <span>
      <span onClick={() => setOpen(true)}>{children}</span>
      <Modal open={open} onCancel={() => setOpen(false)} title="添加模型" width={800} footer={null}>
        <div style={{ minHeight: 500 }}>add llm modal</div>
      </Modal>
    </span>
  );
}
