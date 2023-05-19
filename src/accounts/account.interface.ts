enum TransactionEnum {
  DEPOSIT = "deposit",
  WITHDRAWAL = "withdrawal",
}

interface ITransaction {
  id: string;
  date: string;
  type: TransactionEnum;
  amount: number;
}

interface IAccount {
  id: string;
  name: string;
  transactions: ITransaction[];
}

export { IAccount, TransactionEnum, ITransaction };
