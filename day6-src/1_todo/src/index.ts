interface Item {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Item[];

// api
function fetchTodoItems(): Item[] {
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Item[] {
  const todos = fetchTodoItems();
  return todos;
}

function getItemById(id: number): Item {
  return todoItems.filter(item => item.id == id)[0];  
}

function findIndexById(id: number): number {
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id == id) return i;
  }
  return - 1;
}

function addTodo(todo: Item) {
  todoItems.push(todo);
}

function deleteTodo(id: number) {
  todoItems.splice(findIndexById(id), 1);
}

function completeTodo(id: number): void {
  getItemById(id).done = true;
}

// business logic
function logFirstTodo(): { id: number; title: string; done: boolean } {
  return todoItems[0];
}

function showCompleted(): { id: number; title: string; done: boolean }[] {
  return todoItems.filter((item) => item.done);
}

function addTwoTodoItems(): void {
  addTodo({ id: 10, title: "hello", done: false });
  addTodo({ id: 11, title: "mello", done: false });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodos();
addTwoTodoItems();
console.log(getItemById(10));
completeTodo(10);
completeTodo(11);
console.log(showCompleted());
deleteTodo(10);
log();
