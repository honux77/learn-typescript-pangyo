let todoItems: { id: number; title: string; done: boolean }[];

// api
function fetchTodoItems(): any {
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: { id: number; title: string; done: boolean }) {
  todoItems.push(todo);
}

function deleteTodo(index: number) {
  todoItems.splice(index, 1);
}

function completeTodo(
  index: number,
  todo: { id: number; title: string; done: boolean }
): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): { id: number; title: string; done: boolean } {
  return todoItems[0];
}

function showCompleted(): { id: number; title: string; done: boolean }[] {
  return todoItems.filter((item) => item.done);
}

function addTwoTodoItems(
  item1: { id: number; title: string; done: boolean },
  item2: { id: number; title: string; done: boolean }
): void {
  addTodo(item1);
  addTodo(item2);
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems(
  { id: 10, title: "hello", done: false },
  { id: 11, title: "mello", done: true }
);
log();
