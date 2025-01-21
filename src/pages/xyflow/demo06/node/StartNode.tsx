import React from 'react';
import NodeContainer from "./base/NodeContainer";

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
        <div>Start</div>
        <div>Start</div>
        <div>Start</div>
        <div>Start</div>
        <div>Start</div>
        <div>Start</div>
      </div>
    </NodeContainer>
  )
}
