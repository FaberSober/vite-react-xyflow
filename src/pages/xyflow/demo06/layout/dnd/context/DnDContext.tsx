import { createContext } from "react";

export type DnDType = 'input' | 'default' | 'output'

export interface DnDContextProps {
  type: DnDType|undefined;
  setType: (v: DnDType|undefined) => void;
}

export const DnDContext = createContext<DnDContextProps>({} as any);
