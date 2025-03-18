interface Todo {
  id: number;
  text: string;
}

const TODOS: Todo[] = [];

export function addTodo(text: string) {
  const item = {id: Math.random(), text};
  TODOS.push(item);
  return item;
}

export function getTodo(id: number) {
  const item= TODOS.find(item => item.id === id);
  if (!item) {
    throw new Error("Todo not found");
  }
  return item;
}

export function getTodos() {
  return TODOS;
}

export function removeTodo(id: number) {
  const index = TODOS.findIndex(item => item.id === id);
  if (index > -1) {
    TODOS.splice(index, 1);
    return true;
  }
  return false;
}

export function updateTodo(id: number, text: string) {
  const item = getTodo(id);
  item.text = text;
  return item;
}