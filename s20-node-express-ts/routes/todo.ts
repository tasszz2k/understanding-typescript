import express from 'express';
import {addTodo, getTodo, getTodos, removeTodo, updateTodo} from "../data.ts";

enum TODO_TYPE {
  BASIC,
  URGENT
}

const router = express.Router();

router.post('/todos', (req, res) => {
  console.log(req.body);

  const text = req.body.text;
  const savedItem = addTodo(text);
  res.json({messages: 'Todo created', todo: savedItem});

});

router.get('/todos', (req, res) => {
  console.log(req.body);
  const items = getTodos();
  res.json({items})
});

router.get('/todos/:id', (req, res) => {
  console.log(req.body);
  const id = +req.params.id;
  const item = getTodo(id);
  res.json({item});
});

router.patch('/todos/:id', (req, res) => {
  console.log(req.body);
  const updatedItem = updateTodo(+req.params.id, req.body.text);
  res.json({message: 'Todo updated', todo: updatedItem});
})

router.delete('/todos/:id', (req, res) => {
  removeTodo(+req.params.id);
  res.json({message: 'Todo deleted'});
});
export default router;
