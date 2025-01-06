import React from 'react';
import { ReactFlow } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function XyflowDemo01() {
  return (
    <div className="fa-full fa-flex-column">
      <div className="fa-border-bottom fa-p12">
        <a
          href="https://reactflow.dev/learn#creating-your-first-flow"
          target="_blank"
        >
          https://reactflow.dev/learn#creating-your-first-flow
        </a>
        <p>
          <ul>
            <li>🎨 You must import the React Flow stylesheet.</li>
            <li>
              📐 The <code>&lt;ReactFlow /&gt;</code> component must be wrapped
              in an element with a width and height.
            </li>
          </ul>
        </p>
      </div>
      <div className="fa-flex1 fa-relative">
        <div className="fa-absolute0">
          <ReactFlow nodes={initialNodes} edges={initialEdges} />
        </div>
      </div>
    </div>
  );
}
