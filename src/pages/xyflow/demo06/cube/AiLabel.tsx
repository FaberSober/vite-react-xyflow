import React from 'react';


export interface AiLabelProps {
  title: string;
}

/**
 * @author xu.pengfei
 * @date 2025/1/21 11:38
 */
export default function AiLabel({title}: AiLabelProps) {
  return (
    <div className="fa-ai-node-label">
      {title}
    </div>
  )
}
