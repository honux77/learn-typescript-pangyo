var todoItems;
// api
function fetchTodoItems() {
    var todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
    ];
    return todos;
}
// crud methods
function fetchTodos() {
    var todos = fetchTodoItems();
    return todos;
}
function addTodo(todo) {
    todoItems.push(todo);
}
function deleteTodo(index) {
    todoItems.splice(index, 1);
}
function completeTodo(index, todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}
// business logic
function logFirstTodo() {
    return todoItems[0];
}
function showCompleted() {
    return todoItems.filter(function (item) { return item.done; });
}
function addTwoTodoItems(item1, item2) {
    addTodo(item1);
    addTodo(item2);
}
// NOTE: 유틸 함수
function log() {
    console.log(todoItems);
}
todoItems = fetchTodoItems();
addTwoTodoItems({ id: 10, title: 'hello', done: false }, { id: 11, title: 'mello', done: true });
log();
