import { Component, OnInit } from '@angular/core'
import { GetAllTodosQry } from './features/home/application/get-all-todos-qry'
import { Todo } from './features/home/domain/todo'
import { Id } from './core/id'
import { CompleteTodoCmd } from './features/home/application/complete-todo-cmd'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = []

  constructor(private readonly getAllTodosQry: GetAllTodosQry, private readonly completeTodoCmd: CompleteTodoCmd) {}

  async ngOnInit() {
    this.todos = await this.getAllTodosQry.execute()
  }

  completeTodo(id: Id) {
    this.completeTodoCmd.execute(id)
  }
}
