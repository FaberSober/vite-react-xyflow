import React from 'react';
import { Button, Form } from 'antd';
import { Handle, Node, Position } from '@xyflow/react';
import { AiLabel } from '@/pages/xyflow/demo06/cube';
import NodeContainer from '../base/NodeContainer';
import AiChatModelSelect from './cube/AiChatModelSelect';
import { MdEditorMagnify } from "@/pages/xyflow/demo06/components/markdown";

export type AiChatNodeProps = Node<{}, 'ai-chat-node'>;

/**
 * @author xu.pengfei
 * @date 2025/1/21 16:38
 */
export default function AiChatNode({ selected }: AiChatNodeProps) {
  const [form] = Form.useForm();

  return (
    <NodeContainer title="AI对话" icon="icon_robot" selected={selected}>
      <AiLabel title="节点设置" />
      <div className="fa-ai-node-item-inner-card nodrag nopan nowheel">
        <Form form={form} layout="vertical" onFinish={(v) => console.log('finish', v)}>
          <Form.Item name="modelId" label="AI模型" rules={[{ required: true, message: '请选择AI模型' }]}>
            <AiChatModelSelect />
          </Form.Item>
          <Form.Item name="system" label="角色设定">
            <MdEditorMagnify />
          </Form.Item>

          <Button htmlType="submit">submit</Button>
        </Form>
      </div>

      <AiLabel title="参数输出" />

      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </NodeContainer>
  );
}
