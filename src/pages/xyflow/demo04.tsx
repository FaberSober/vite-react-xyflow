import React, { KeyboardEventHandler, useCallback, useState } from "react";
import { Background, BackgroundVariant, Controls, MiniMap, type NodeMouseHandler, ReactFlow, useReactFlow, } from '@xyflow/react';

import { slides, slidesToElements } from './cube/slides';
import { Slide, type SlideData, } from './cube/Slide';


const nodeTypes = {
  slide: Slide,
};

const initialSlide = '01';
const { nodes, edges } = slidesToElements(initialSlide, slides);

export default function XyflowDemo04() {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const { fitView } = useReactFlow();

  const handleKeyPress = useCallback<KeyboardEventHandler>(
    (event) => {
      const slide = slides[currentSlide];

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowRight': {
          const direction = event.key.slice(5).toLowerCase() as keyof SlideData;
          const target = slide[direction];

          // Prevent the arrow keys from scrolling the page when React Flow is
          // only part of a larger application.
          event.preventDefault();

          if (target) {
            setCurrentSlide(target);
            fitView({ nodes: [{ id: target }], duration: 100 });
          }
        }
      }
    },
    [fitView, currentSlide],
  );

  const handleNodeClick = useCallback<NodeMouseHandler>(
    (_, node) => {
      if (node.id !== currentSlide) {
        setCurrentSlide(node.id);
        fitView({ nodes: [{ id: node.id }], duration: 100 });
      }
    },
    [fitView, currentSlide],
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
            fitViewOptions={{ nodes: [{ id: initialSlide }], duration: 100 }}
            minZoom={0.1}
            onKeyDown={handleKeyPress}
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
