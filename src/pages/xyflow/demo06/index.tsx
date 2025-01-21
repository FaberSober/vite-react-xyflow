import React from 'react';
import './index.css'
import DndLayout from "./layout/dnd/DndLayout";
import AiFlow from "./AiFlow";


/**
 * @author xu.pengfei
 * @date 2025/1/21 10:39
 */
export default function index() {
  return (
    <DndLayout>
      <AiFlow />
    </DndLayout>
  )
}
