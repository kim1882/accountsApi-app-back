/**
 * Data Model Interfaces
 */
import { IAccount, TransactionEnum } from "./account.interface";

/**
 * In-Memory Store
 */
let accounts: IAccount[] = [
  { id: "123456789", name: "First account", transactions: [] },
  {
    id: "987654321",
    name: "Second account really long name",
    transactions: [
      {
        id: "t1",
        date: "05/18/2023",
        type: TransactionEnum.DEPOSIT,
        amount: 250,
      },
      {
        id: "t2",
        date: "05/18/2023",
        type: TransactionEnum.WITHDRAWAL,
        amount: 20,
      },
    ],
  },
];

/**
 * Service Methods
 */

export const findAll = async (): Promise<IAccount[]> => Object.values(accounts);

export const create = async (id: string, name: string): Promise<IAccount> => {
  const newAccount = {
    id,
    name,
    transactions: [],
  };

  accounts.push(newAccount);

  return newAccount;
};

export const remove = async (id: string): Promise<null | void> => {
  const newAccounts = accounts.filter((item) => item.id !== id);
  accounts = newAccounts;
  return null;
};
