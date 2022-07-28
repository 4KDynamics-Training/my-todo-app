import { trigger, style, animate, state, transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoList: TodoItem[] = [
    {
      description: "Wash the dishes",
      priority: TodoItemPriority.HIGH,
      status: TodoItemStatus.NOT_STARTED,
      dueDate: new Date(2022, 8, 15)
    },
    {
      description: "eat cookies",
      priority: TodoItemPriority.HIGH,
      status: TodoItemStatus.DONE,
      dueDate: new Date()
    }
  ];

  newTodoDescription: string = "";

  updateNewTodo(event: Event){
    this.newTodoDescription = (event.target as HTMLInputElement).value;
  }

  saveTodo(){
    var myNewTodo: TodoItem = {
      description: this.newTodoDescription,
      priority: TodoItemPriority.LOW,
      status: TodoItemStatus.NOT_STARTED,
      dueDate: new Date()
    }
    this.todoList.push(myNewTodo)
    this.newTodoDescription = '';
  }

  deleteTodo(index: number){
    this.todoList.splice(index, 1);
  }
}


interface TodoItem {
  description: string,
  status: TodoItemStatus,
  duration?: number,
  priority: TodoItemPriority,
  dueDate: Date
}

enum TodoItemStatus {
  NOT_STARTED,
  WORKING_ON_IT,
  DONE
}

enum TodoItemPriority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High"
}
