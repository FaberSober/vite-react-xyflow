import React, { useState } from 'react';
import { DnDContext } from "./context/DnDContext";
import type { DnDContextProps, DnDType } from "./context/DnDContext";
import type { Fa } from "@/types/global";


/**
 * @author xu.pengfei
 * @date 2025/1/20 16:58
 */
export default function DndLayout({ children }: Fa.BaseChildProps) {
  const [type, setType] = useState<DnDType|undefined>();

  const contextValue: DnDContextProps = {
    type,
    setType,
  }

  return (
    <DnDContext.Provider value={contextValue}>
      {children}
    </DnDContext.Provider>
  )
}
