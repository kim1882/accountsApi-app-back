import { Request, Response, NextFunction } from "express";

const MAX_AMOUNT = 10000;

export const logTransactionHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const {
    method,
    body: { type, amount },
  } = request;
  if (method === "POST" && type === "deposit" && amount > MAX_AMOUNT) {
    console.log(`A deposit greater than ${MAX_AMOUNT} USD has been made!`);
    next();
  } else {
    next();
  }
};
