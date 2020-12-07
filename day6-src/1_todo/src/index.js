var todoItems;
// api
function fetchTodoItems() {
    var todos = [
        { id: 1, title: "안녕", done: false },
        { id: 2, title: "타입", done: false },
        { id: 3, title: "스크립트", done: false },
    ];
    return todos;
}
// crud methods
function fetchTodos() {
    var todos = fetchTodoItems();
    return todos;
}
function getItemById(id) {
    return todoItems.filter(function (item) { return item.id == id; })[0];
}
function findIndexById(id) {
    for (var i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id == id)
            return i;
    }
    return -1;
}
function addTodo(todo) {
    todoItems.push(todo);
}
function deleteTodo(id) {
    todoItems.splice(findIndexById(id), 1);
}
function completeTodo(id) {
    getItemById(id).done = true;
}
// business logic
function logFirstTodo() {
    return todoItems[0];
}
function showCompleted() {
    return todoItems.filter(function (item) { return item.done; });
}
function addTwoTodoItems() {
    addTodo({ id: 10, title: "hello", done: false });
    addTodo({ id: 11, title: "mello", done: false });
}
// NOTE: 유틸 함수
function log() {
    console.log(todoItems);
}
todoItems = fetchTodos();
addTwoTodoItems();
console.log(getItemById(10));
completeTodo(10);
console.log(showCompleted());
deleteTodo(10);
log();
