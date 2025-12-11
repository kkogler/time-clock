import cors from 'cors';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    mode: process.env.NODE_ENV ?? 'development',
    timestamp: new Date().toISOString(),
  });
});

// In production, serve the built client.
if (process.env.NODE_ENV === 'production') {
  const clientDist = path.resolve(__dirname, '..');
  app.use(express.static(clientDist));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});

