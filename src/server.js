import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';

import notesRoutes from './routes/notesRoutes.js';

const app = express();

app.use(logger);
app.use(express.json({
  type: ['application/json', 'application/vnd.api+json'],
  limit: '100kb',
}));
app.use(cors());

const PORT = process.env.PORT ?? 3030;

app.use(notesRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
