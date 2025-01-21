import React from 'react';
import NodeContainer from './base/NodeContainer';
import { AiLabel } from "@/pages/xyflow/demo06/cube";
import { Handle, Position } from "@xyflow/react";

/**
 * @author xu.pengfei
 * @date 2025/1/21 16:38
 */
export default function AiChatNode() {
  return (
    <NodeContainer
      title="AI对话"
      icon="icon_robot"
    >
      <AiLabel title="全局变量" />

      <AiLabel title="参数输出" />

      <Handle type="target" position={Position.Left} />
    </NodeContainer>
  )
}
