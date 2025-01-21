import React from 'react';
import { Select, SelectProps } from 'antd';

export interface AiChatModelSelectProps extends SelectProps {}

/**
 * @author xu.pengfei
 * @date 2025/1/21 21:34
 */
export default function AiChatModelSelect({ ...props }: AiChatModelSelectProps) {
  return (
    <Select
      options={[
        {
          label: <span>通义千问</span>,
          title: 'qwen',
          options: [
            { label: <span>qwen-turbo</span>, value: 'qwen-turbo' },
            { label: <span>qwen-plus</span>, value: 'qwen-plus' },
            { label: <span>qwen-max</span>, value: 'qwen-max' },
          ],
        },
        {
          label: <span>智谱AI</span>,
          title: 'zhipuai',
          options: [
            { label: <span>glm-4</span>, value: 'glm-4' },
            { label: <span>glm-4v</span>, value: 'glm-4v' },
            { label: <span>glm-3-turbo</span>, value: 'glm-3-turbo' },
          ],
        },
      ]}
      placeholder="请选择AI模型"
      allowClear
      {...props}
    />
  );
}
