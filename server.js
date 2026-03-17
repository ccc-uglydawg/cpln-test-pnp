import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.json({ runtime: 'pnpm', status: 'ok' }));
app.get('/healthz', (req, res) => res.send('ok'));
app.listen(port, () => console.log(`pnpm server on ${port}`));
// cache-auth-basic test 1773708584
