import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { appPipeModule } from "../shared/pipe/app-pipe.module";
import { courseListComponent } from "./course-list.component";
import { courseInfoComponent } from "./course.info.component";

@NgModule({
    declarations:[
        courseListComponent,
        courseInfoComponent,
   
    ],
    imports:[
        CommonModule,
        FormsModule,
        StarModule,
        appPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: courseListComponent
            },
            {
                path: 'courses/info/:id', component: courseInfoComponent
            },
        ])
    ]
})

export class CourseModule{

}