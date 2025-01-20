import { createContext, useContext, useState } from 'react';

const DnDContext = createContext([null, (_: any) => {}]);

export const DnDProvider = ({ children }: any) => {
  const [type, setType] = useState(null);

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
}

export default DnDContext;

export interface DnDContextType {
  type: string | null;
  setType: (type: string | null) => void;
}

export const useDnD = () => {
  return useContext<DnDContextType>(DnDContext);
}
