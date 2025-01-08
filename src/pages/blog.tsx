import { Outlet } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <div>Blog Header</div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
