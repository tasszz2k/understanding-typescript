import express, {type Request, type Response, type NextFunction} from 'express';

import todoRoutes from './routes/todo.ts';

const app = express();

app.use(express.json()); // Middleware to parse JSON request body
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({error: err.message});
})

// app.get('/', (req, res) => {
//   console.log(req.method, req.url);
//   res.json({message: 'Hello world!'});
// })

app.use(todoRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})