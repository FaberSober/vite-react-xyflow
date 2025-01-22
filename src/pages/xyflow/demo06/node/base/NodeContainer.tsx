import React, { CSSProperties, useState } from 'react';
import { CaretDownOutlined, CaretLeftOutlined } from '@ant-design/icons';
import clsx from 'clsx';

export interface NodeContainerProps {
  title: string;
  icon?: string;
  color?: string;
  selected?: boolean;
  showToggle?: boolean;
  className?: string;
  style?: CSSProperties;
  bodyClassName?: string;
  bodyStyle?: CSSProperties;
  children?: React.ReactNode;
  handle?: React.ReactNode;
}

/**
 * @author xu.pengfei
 * @date 2025/1/21 11:06
 */
export default function NodeContainer({ title, icon, color, selected, showToggle = true, className, style, bodyClassName, bodyStyle, children, handle }: NodeContainerProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className={clsx('fa-node-card', 'p-12px', selected && 'fa-node-card-sel')} style={{ minWidth: 280, ...style }}>
      <div className="fa-flex-row fa-flex-row-center">
        {icon && (
          <div className="fa-flex-row fa-flex-center fa-radius fa-mr4" style={{ background: color || '#F00' }}>
            <img src={`/file/image/svg/ai/${icon}.svg`} alt={title} style={{ width: 20, height: 20 }} />
          </div>
        )}
        <div className="fa-h3 fa-flex-1">{title}</div>
        <div>
          {showToggle && (
            <div onClick={() => setOpen(!open)} className="fa-link-btn fa-flex-row fa-flex-center" style={{width: 20, height: 20}}>
              {open ? <CaretDownOutlined/> : <CaretLeftOutlined/>}
            </div>
          )}
        </div>
      </div>
      {open && (
        <div className={`fa-mt12 ${bodyClassName}`} style={bodyStyle}>
          {children}
        </div>
      )}
      {handle}
    </div>
  );
}
