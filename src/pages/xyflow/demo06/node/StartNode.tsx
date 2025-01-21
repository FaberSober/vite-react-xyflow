import React from 'react';
import NodeContainer from "./base/NodeContainer";
import { AiLabel, AiItem } from "../cube";

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
        <AiItem label='当前时间' value='time' />
        <AiItem label='历史聊天记录' value='history_context' />
        <AiItem label='全局变量' value='chat_id' />

        <AiLabel title="参数输出" />
        <AiItem label='开始' value='question' />
      </div>
    </NodeContainer>
  )
}
