/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todos = []
  Todo()
  {

  }

  add(todo){
    this.todos.push(todo);
    // console.log(todos);
  }

  remove(indexOfTodo)
  {
    if(indexOfTodo<=this.todos.length-1){
      this.todos.splice(indexOfTodo,1);
    }
  }

  getAll(){
    return this.todos;
  }

  get(indexOfTodo)
  {
    if (indexOfTodo <= this.todos.length-1){
      return this.todos[indexOfTodo];
    }
    return null;
  }

  update(index,todo)
  {
    if(index<=this.todos.length-1){

      this.todos[index] = todo;
    }
  }

  clear(){
    this.todos=[];
  }

}

module.exports = Todo;
