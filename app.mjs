import http from "http";
import {TodoListService} from "./todolist-service.mjs";

const service = new TodoListService();
const server = http.createServer((request, response) => {
    // response.write('Todolist API');
    // response.end();

    response.setHeader("Content-Type", "application/json");

    if(request.method === 'GET' && request.url === '/v1/getTodoList') {
        service.getTodolist(request, response);
    } else if (request.method === 'POST' && request.url === '/v1/createTodo') {
        service.createTodo(request, response);
    } else if (request.method === 'PUT' && request.url === '/v1/updateTodo') {
        service.updateTodoList(request, response);
    } else if (request.method === 'DELETE' && request.url === '/v1/deleteTodo') {
        service.deleteTodoList(request, response);
    }

});

server.listen(3000);