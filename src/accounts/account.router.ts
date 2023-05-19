/**
 * External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as AccountService from "./account.service";
import { IAccount } from "./account.interface";

/**
 * Router Definition
 */

export const accountRouter = express.Router();

/**
 * Controller Definitions
 */

// GET accounts
accountRouter.get("/", async (req: Request, res: Response) => {
  try {
    const accounts: IAccount[] = await AccountService.findAll();
    res.status(200).send(accounts);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST accounts
accountRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;
    const newAccount = await AccountService.create(id, name);
    res.status(201).json(newAccount);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE accounts/:id
