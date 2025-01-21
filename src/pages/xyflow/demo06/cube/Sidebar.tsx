import { useContext } from 'react';
import { DnDContext } from '../layout/dnd/context/DnDContext';
import type { DnDType } from '../layout/dnd/context/DnDContext';

export default () => {
  const { setType } = useContext(DnDContext);

  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: DnDType) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'ai-chat-node')} draggable>
        AI 对话
      </div>
    </aside>
  );
};
