import React from 'react';
import { Button, Form, InputNumber, Select, Switch } from 'antd';
import { Handle, Node, Position } from '@xyflow/react';
import { AiItem, AiLabel } from '@/pages/xyflow/demo06/cube';
import NodeContainer from '../base/NodeContainer';
import AiChatModelSelect from './cube/AiChatModelSelect';
import { MdEditorMagnify } from "@/pages/xyflow/demo06/components/markdown";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

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
          <Form.Item name="prompt" label="提示词" rules={[{ required: true, message: '请输入提示词' }]} tooltip={{
            title: '通过调整提示词内容，可以引导大模型聊天方向，该提示词会被固定在上下文的开头，可以使用变量。',
            getPopupContainer: () => document.body,
          }}>
            <MdEditorMagnify />
          </Form.Item>
          <Form.Item
            name="dialogueNumber"
            label="历史聊天记录"
          >
            <InputNumber
              min={0}
              max={999}
              step={1}
              addonAfter={(
                <Form.Item name="dialogueType" rules={[{ required: true }]} style={{ marginBottom: 0 }}>
                  <Select
                    options={[
                      { label: '会话', value: 'dialog' },
                      { label: '工作流', value: 'workflow' },
                    ]}
                    style={{ width: 90 }}
                  />
                </Form.Item>
              )}
            />
          </Form.Item>
          <Form.Item name="isResult" label="返回内容" rules={[{ required: true }]} layout='horizontal' valuePropName="checked" tooltip={{
            title: '关闭后该节点的内容则不输出给用户。 如果你想让用户看到该节点的输出内容，请打开开关。',
            getPopupContainer: () => document.body,
          }} className="fa-ai-node-item-form-item-horizontal-right">
            <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
          </Form.Item>

          <Button htmlType="submit">submit</Button>
        </Form>
      </div>

      <AiLabel title="参数输出" />
      <AiItem label="AI 回答内容" value="answer" />

      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </NodeContainer>
  );
}
