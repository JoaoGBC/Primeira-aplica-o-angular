import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './courses/course.module';
import { coreModule } from './core/component/core.module';
import { error404Component } from './core/component/erro-404/erro-404.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    coreModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: '/courses', pathMatch: 'full'
      },
      {
        path: '**/**'   , component: error404Component
      } 
         
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
