export class TodoListService {

    todolist = [];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "Success get todo list", 
            data: this.todolist.map((value,index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        });
    };

    getTodolist(request,response) {
        response.write(this.getJsonTodoList());
        response.end();  
    };

    createTodo (request,response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

            response.write(this.getJsonTodoList());
            response.end();
        });
    };
};