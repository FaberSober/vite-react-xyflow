import { ReactFlowProvider } from '@xyflow/react';
import { Outlet } from 'react-router-dom';
import '@xyflow/react/dist/style.css';

export default function Blog() {
  return (
    <div className="fa-full fa-flex-column">
      <div>UnoCSS Header</div>

      <div className="fa-flex1 fa-relative">
        <Outlet />
      </div>
    </div>
  );
}
