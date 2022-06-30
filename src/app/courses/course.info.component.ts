import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { courseService } from "./course.service";

@Component({
    templateUrl: './course.info.component.html'
})

export class courseInfoComponent implements OnInit{

    course: Course;

    constructor(private activatedroute: ActivatedRoute, private courseService: courseService){}

    ngOnInit(): void {
        this.courseService.retrieveById(Number(this.activatedroute.snapshot.paramMap.get('id'))).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error Teste : ', err)
        })
        // this.courseService.retrieveById(Number(this.activatedroute.snapshot.paramMap.get('id'))).subscribe({
        //     next: course => this.course = course,
        //     error: err => console.log('error:' ,err) 
        // });
    }

    save():void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with sucess', course),
            error: err => console.log('Error', err)
        });
    }

}