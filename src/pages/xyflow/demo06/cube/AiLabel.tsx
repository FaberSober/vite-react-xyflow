import React, { HTMLAttributes } from 'react';

export interface AiLabelProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

/**
 * @author xu.pengfei
 * @date 2025/1/21 11:38
 */
export default function AiLabel({ title, ...props }: AiLabelProps) {
  return (
    <div className="fa-ai-node-label" {...props}>
      {title}
    </div>
  );
}
