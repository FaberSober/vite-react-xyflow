import React, { useState } from 'react';
import FaMdEditor from "@/pages/xyflow/demo06/components/markdown/FaMdEditor";
import { Button, Modal } from "antd";
import { FullscreenOutlined } from "@ant-design/icons";


export interface MdEditorMagnifyProps {
  title?: string;
  value?: string;
  onChange?: (v:string) => void;
}

/**
 * @author xu.pengfei
 * @date 2025/1/22 11:15
 */
export default function MdEditorMagnify({ title, value, onChange }: MdEditorMagnifyProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: '300px', height: '100px', position: 'relative' }}>
      <FaMdEditor
        value={value}
        onChange={onChange}
        preview={false}
        placeholder="请输入markdown内容"
        toolbars={[]}
        footers={[]}
        style={{height: 100}}
      />
      <div style={{ position: 'absolute', right: 4, bottom: 4 }}>
        <Button onClick={() => setOpen(true)} icon={<FullscreenOutlined />} type='text' />
      </div>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        width={1000}
        height={500}
        title={title || '编辑'}
      >
        <FaMdEditor
          value={value}
          onChange={onChange}
          preview
          placeholder="请输入markdown内容"
          toolbars={[]}
          footers={[]}
          style={{height: 450}}
        />
      </Modal>
    </div>
  )
}
