import { createContext } from 'react';
import { BalanceContextType } from '@/app/types/index.type';

export const BalanceContext = createContext<BalanceContextType | null>(null)
