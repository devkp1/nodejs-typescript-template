import express from 'express';
const app = express.Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a greeting
 *     responses:
 *       200:
 *         description: A successful response
 */
app.get('/hello', (_req, res) => {
  res.send('Hello from Swagger!');
});
