import { ReactNode, useCallback, useContext, useMemo, useRef } from 'react';
import type React from 'react';
import { addEdge, Background, Controls, type Edge, type Node, ReactFlow, useEdgesState, useNodesState, useReactFlow } from "@xyflow/react";
import { DnDContext, DnDType } from "./layout/dnd/context/DnDContext";
import Sidebar from "./cube/Sidebar";
import { StartNode, AiChatNode } from "./node";

const initialNodes = [
  {
    id: '1',
    type: 'start',
    data: { label: '开始' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'ai-chat-node',
    data: { label: 'AI 对话' },
    position: { x: 300, y: 0 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

/**
 * @author xu.pengfei
 * @date 2025/1/21 10:41
 */
export default function AiFlow() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { screenToFlowPosition } = useReactFlow();
  const { type } = useContext(DnDContext);

  const onConnect = useCallback(
    (params: Edge) => {
      setEdges((eds: Edge[]) => addEdge(params, eds))
    },
    [],
  );

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

  const nodeTypes: Record<DnDType, () => React.JSX.Element> = useMemo(() => ({
    start: StartNode,
    'ai-chat-node': AiChatNode,
  }), []);

  return (
    <div className="fa-full fa-flex-column">
      <div className="fa-border-bottom fa-p12">
        <div>
          <ol>
            <li>MaxKB is referenced.</li>
          </ol>
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
              nodeTypes={nodeTypes}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              style={{ backgroundColor: "#F7F9FB" }}
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
