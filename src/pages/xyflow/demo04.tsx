import React, { useCallback, useMemo } from "react";
import {
  ReactFlow,
  useReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  type Node,
  type NodeMouseHandler, Controls, MiniMap,
} from '@xyflow/react';

import slides from './cube/slides';
import {
  Slide,
  SLIDE_WIDTH,
  SLIDE_HEIGHT,
  SLIDE_PADDING,
  type SlideData,
} from './cube/Slide';


const slidesToElements = () => {
  const start = Object.keys(slides)[0];
  const stack = [{ id: start, position: { x: 0, y: 0 } }];
  const visited = new Set();
  const nodes = [];
  const edges = [];

  while (stack.length) {
    const { id, position } = stack.pop();
    const slide = slides[id];
    const node = {
      id,
      type: 'slide',
      position,
      data: slide,
      draggable: false,
    } satisfies Node<SlideData>;

    if (slide.left && !visited.has(slide.left)) {
      const nextPosition = {
        x: position.x - (SLIDE_WIDTH + SLIDE_PADDING),
        y: position.y,
      };

      stack.push({ id: slide.left, position: nextPosition });
      edges.push({
        id: `${id}->${slide.left}`,
        source: id,
        target: slide.left,
      });
    }

    if (slide.up && !visited.has(slide.up)) {
      const nextPosition = {
        x: position.x,
        y: position.y - (SLIDE_HEIGHT + SLIDE_PADDING),
      };

      stack.push({ id: slide.up, position: nextPosition });
      edges.push({ id: `${id}->${slide.up}`, source: id, target: slide.up });
    }

    if (slide.down && !visited.has(slide.down)) {
      const nextPosition = {
        x: position.x,
        y: position.y + (SLIDE_HEIGHT + SLIDE_PADDING),
      };

      stack.push({ id: slide.down, position: nextPosition });
      edges.push({
        id: `${id}->${slide.down}`,
        source: id,
        target: slide.down,
      });
    }

    if (slide.right && !visited.has(slide.right)) {
      const nextPosition = {
        x: position.x + (SLIDE_WIDTH + SLIDE_PADDING),
        y: position.y,
      };

      stack.push({ id: slide.right, position: nextPosition });
      edges.push({
        id: `${id}->${slide.down}`,
        source: id,
        target: slide.down,
      });
    }

    nodes.push(node);
    visited.add(id);
  }

  return { start, nodes, edges };
};

const nodeTypes = {
  slide: Slide,
};

export default function XyflowDemo04() {
  const { fitView } = useReactFlow();
  const { start, nodes, edges } = useMemo(() => slidesToElements(), []);

  const handleNodeClick = useCallback<NodeMouseHandler>(
    (_, node) => {
      fitView({ nodes: [{ id: node.id }], duration: 150 });
    },
    [fitView],
  );

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
          <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            edges={edges}
            fitView
            fitViewOptions={{ nodes: [{ id: start }] }}
            minZoom={0.1}
            onNodeClick={handleNodeClick}
          >
            <Controls />
            <MiniMap />
            <Background color="#f2f2f2" variant={BackgroundVariant.Lines} />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}
