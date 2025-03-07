import { ReactFlow, addEdge, useEdgesState, useNodesState } from '@xyflow/react';
import React, { useCallback } from 'react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function XyflowDemo02() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="fa-full fa-flex-column">
      <div className="fa-border-bottom fa-p12">
        <a href="https://reactflow.dev/learn#adding-interactivity" target="_blank" rel="noreferrer">
          Adding interactivity
        </a>
        <div>
          <ul>
            <li>🎨 You must import the React Flow stylesheet.</li>
          </ul>
        </div>
      </div>
      <div className="fa-flex1 fa-relative">
        <div className="fa-absolute0">
          <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} />
        </div>
      </div>
    </div>
  );
}
