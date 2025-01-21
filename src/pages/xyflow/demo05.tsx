import { useCallback, useContext, useRef } from 'react';
import { addEdge, Background, Connection, Controls, ReactFlow, useEdgesState, useNodesState, useReactFlow } from '@xyflow/react';
import type { Node, Edge } from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import Sidebar from '@/pages/xyflow/cube/Sidebar';
import './cube/demo05.css';
import DndLayout from '@/pages/xyflow/layout/dnd/DndLayout';
import { DnDContext } from '@/pages/xyflow/layout/dnd/context/DnDContext';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input node' },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

function XyflowDemo05Main() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { screenToFlowPosition } = useReactFlow();
  const { type } = useContext(DnDContext);

  const onConnect = useCallback((params: Connection) => {
    setEdges((eds: Edge[]) => addEdge(params, eds));
  }, []);

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      // check if the dropped element is valid
      if (!type) {
        return;
      }

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type],
  );

  return (
    <div className="fa-full fa-flex-column">
      <div className="fa-border-bottom fa-p12">
        <a href="https://reactflow.dev/learn#creating-your-first-flow" target="_blank" rel="noreferrer">
          https://reactflow.dev/learn#creating-your-first-flow
        </a>
        <div>
          <ul>
            <li>🎨 You must import the React Flow stylesheet.</li>
            <li>
              📐 The <code>&lt;ReactFlow /&gt;</code> component must be wrapped in an element with a width and height.
            </li>
          </ul>
        </div>
      </div>
      <div className="fa-flex1 fa-relative">
        <div className="fa-absolute0 flex dndflow">
          <div className="w-200px">
            <Sidebar />
          </div>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              style={{ backgroundColor: '#F7F9FB' }}
            >
              <Controls />
              <Background />
            </ReactFlow>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function XyflowDemo05() {
  return (
    <DndLayout>
      <XyflowDemo05Main />
    </DndLayout>
  );
}
