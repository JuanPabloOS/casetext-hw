import { accounts } from "@/data/accounts";

export const AccountApi = {
  getAccountId: (pin: string) => {
    const id = accounts.findIndex((acc) => acc.pin === pin);
    if (!accounts[id]) {
      throw new Error("Unexpected error, account does not exist.");
    }
    return id;
  },
  getAccount: (pin: string) => {
    const id = AccountApi.getAccountId(pin);
    return accounts[id];
  },
  withdraw: (pin: string, total: number) => {
    const id = AccountApi.getAccountId(pin);
    if (accounts[id].balance < total) {
      throw new Error("You don't have enough money");
    }
    accounts[id].balance -= total;
    return accounts[id];
  },
  deposit: (pin: string, total: number) => {
    const id = AccountApi.getAccountId(pin);
    accounts[id].balance += total;
    return accounts[id];
  },
};
