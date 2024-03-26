import { ETH_NAME, TOKEN_NAME } from '@/app/constants';

export type AccountAddress = `0x${string}`;
export type BalanceAddress = `0x${string}`;
export type BalanceValue = bigint | null;
export type Balance = {
  balance: BalanceValue;
  name: string;
};

export type BalanceContextType = {
  [ETH_NAME]: Balance;
  [TOKEN_NAME]: Balance;
};
