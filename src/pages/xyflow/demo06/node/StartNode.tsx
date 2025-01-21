import React from 'react';
import NodeContainer from "./base/NodeContainer";
import AiLabel from "@/pages/xyflow/demo06/cube/AiLabel";

/**
 * AI workflow Start Node
 * @author xu.pengfei
 * @date 2025/1/21 10:56
 */
export default function StartNode() {
  return (
    <NodeContainer
      className="w-200px fa-border"
      title="开始"
      icon="icon_start"
    >
      <div>
        <AiLabel title="全局变量" />
        <div>
          当前时间{'{time}'}
        </div>
      </div>
    </NodeContainer>
  )
}
