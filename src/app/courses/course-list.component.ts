import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { courseService } from "./course.service";

@Component({
    // selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class courseListComponent implements OnInit{
    filteredCourses: Course[];

    _courses: Course[] = [];
   
    constructor(private courseService: courseService) {}

    _filterby: string;

    ngOnInit(): void{
        this.retrieveAll();
    }

    retrieveAll(): void{
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error: ' ,err)

        });
    }

    deleteById(courseId: number): void{
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with sucess');
                this.retrieveAll();
            },
            error: err=> console.log('Error', err)
        })
    }

    set filter(value: string){
        this._filterby = value;
    
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);

    }

    get filter() {
        return this._filterby
    }

}