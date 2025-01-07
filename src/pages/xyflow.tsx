import { Outlet } from 'react-router-dom'
import { ReactFlowProvider } from "@xyflow/react";
import '@xyflow/react/dist/style.css';

export default function Blog() {
  return (
    <div className="fa-full fa-flex-column">
      <div>xyflow Header</div>

      <div className="fa-flex1 fa-relative">
        <ReactFlowProvider>
          <Outlet/>
        </ReactFlowProvider>
      </div>
    </div>
  )
}
