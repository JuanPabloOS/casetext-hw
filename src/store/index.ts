import { create } from "zustand";


export type AccountDetails = {
  name: string;
  balance: number;
  pin: string;
  cardType: string;
};
type AccountState = {
  accountDetails: null | AccountDetails;
};

type AccountStoreActions = {
  setAccount: (p: AccountState['accountDetails']) => void;
};

type AcccountStore = AccountState & AccountStoreActions;

export const useAccount = create<AcccountStore>()((set) => ({ 
  accountDetails: null,
  setAccount: (p) => set(() => ({ accountDetails: p })),
}));


