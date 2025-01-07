import { Background, Controls, MiniMap, ReactFlow } from '@xyflow/react';
import Slide, { SLIDE_WIDTH } from "./cube/Slide";
import React from "react";

const nodeTypes = {
  slide: Slide,
};

export default function XyflowDemo04() {
  const nodes = [
    {
      id: '0',
      type: 'slide',
      position: { x: 0, y: 0 },
      data: { source: '# Hello, React Flow!' },
    },
    {
      id: '1',
      type: 'slide',
      position: { x: SLIDE_WIDTH, y: 0 },
      data: { source: '- these are\n- some\n- bullet points!' },
    },
    {
      id: '2',
      type: 'slide',
      position: { x: SLIDE_WIDTH * 2, y: 0 },
      data: {
        source:
          "It's markdown so we can write **bold text** or `code snippets` too!",
      },
    },
  ];

  return (
    <div className="fa-full fa-flex-column">
      <div className="fa-border-bottom fa-p12">
        <a
          href="https://reactflow.dev/learn/tutorials/slide-shows-with-react-flow"
          target="_blank"
        >
          Create a slide show
        </a>
        <div>
          <ul>
            <li>🎨 You must import the React Flow stylesheet.</li>
          </ul>
        </div>
      </div>
      <div className="fa-flex1 fa-relative">
        <div className="fa-absolute0">
          <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView minZoom={0.1}>
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}
