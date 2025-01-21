import { useContext } from 'react';
import { DnDContext } from '@/pages/xyflow/layout/dnd/context/DnDContext';
import type { DnDType } from '@/pages/xyflow/layout/dnd/context/DnDContext';

export default () => {
  const { setType } = useContext(DnDContext);

  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: DnDType) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
    </aside>
  );
};
