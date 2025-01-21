import React, { CSSProperties, useState } from 'react';
import { CaretDownOutlined, CaretLeftOutlined } from "@ant-design/icons";


export interface NodeContainerProps {
  title: string;
  icon?: string;
  color?: string;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

/**
 * @author xu.pengfei
 * @date 2025/1/21 11:06
 */
export default function NodeContainer({title, icon, color, className, style, children}: NodeContainerProps) {
  const [open, setOpen] = useState(true)

  return (
    <div className="fa-node-card p-12px" style={{ minWidth: 245, ...style }}>
      <div className="fa-flex-row fa-flex-row-center">
        {icon && (
          <div className="fa-flex-row fa-flex-center fa-radius fa-mr4" style={{background: color || '#F00' }}>
            <img src={`/file/image/svg/ai/${icon}.svg`} alt={title} style={{ width: 20, height: 20 }} />
          </div>
        )}
        <div className="fa-h3 fa-flex-1">{title}</div>
        <div>
          <div onClick={() => setOpen(!open)} className="fa-link-btn fa-flex-row fa-flex-center" style={{ width: 20, height: 20 }}>
            {open ? <CaretDownOutlined /> : <CaretLeftOutlined />}
          </div>
        </div>
      </div>
      {open && (
        <div className="fa-mt12">
          {children}
        </div>
      )}
    </div>
  )
}
