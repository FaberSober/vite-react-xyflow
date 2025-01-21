import { createContext } from 'react';

export type DnDType = 'start' | 'ai-chat-node';

export interface DnDContextProps {
  type: DnDType | undefined;
  setType: (v: DnDType | undefined) => void;
}

export const DnDContext = createContext<DnDContextProps>({} as any);
