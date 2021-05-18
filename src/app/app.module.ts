import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ButtonComponent } from './core/components/button/button.component'
import { TODO_REPOSITORY_TYPE } from './core/types'
import { HttpClientModule } from '@angular/common/http'
import { TodoFakeRepository } from './features/home/infrastructure/todo-fake-repository'
import { TodoHttpRepository } from './features/home/infrastructure/todo-http-repository'

const isProduction = Math.random() > 0.5

@NgModule({
  declarations: [AppComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: TODO_REPOSITORY_TYPE,
      useClass: isProduction ? TodoHttpRepository : TodoFakeRepository,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
