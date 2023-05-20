/**
 * External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { accountRouter } from "./accounts/account.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import { logTransactionHandler } from "./middleware/logTransaction";

dotenv.config();

/**
 * Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(logTransactionHandler);

app.use("/api/accounts", accountRouter);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
