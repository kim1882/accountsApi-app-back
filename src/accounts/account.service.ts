/**
 * Data Model Interfaces
 */
import { IAccount, ITransaction, TransactionEnum } from "./account.interface";

/**
 * In-Memory Store
 */
let accounts: IAccount[] = [];

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

export const createTransaction = async (
  accountId: string,
  transactionType: TransactionEnum,
  amount: number
): Promise<IAccount | null> => {
  const account = accounts.find((item) => item.id === accountId);
  const newTransaction: ITransaction = {
    id: `${(account?.transactions.length || 0) + 1}`, // For simplicity this is just incremental, would be better to use uuid
    date: new Date().toLocaleDateString("en-US"),
    type: transactionType,
    amount,
  };
  account?.transactions.push(newTransaction);
  return account || null;
};
