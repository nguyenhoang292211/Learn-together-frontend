import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { COURSE_TYPE } from "../models/course-type";
import { Course } from "../models/course.model";
import { GRADES } from "../models/grades";


@Injectable({
    providedIn: 'root'
  })

export class CourseService{

    private courses: Course[]=[{
            id: "1",
            title: "Giải phương trình bậc 3",
            description: "Description",
            price:150000,
            type: COURSE_TYPE.THEORY,
            grade: GRADES.GRADE10,
            thumbnailUrl: "string",
            createdAt: "Date",
            updatedAt: "Date",
            isHidden: false
        },
        {
            id: "2",
            title: "Tìm diện tích khối trụ bằng phương pháp căn bản như trên",
            description: "Description",
            price:170000,
            type: COURSE_TYPE.THEORY,
            grade: GRADES.GRADE11,
            thumbnailUrl: "string",
            createdAt: "Date",
            updatedAt: "Date",
            isHidden: false
            
        },
        {
            id: "3",
            title: "Giai tích căn bản",
            description: "Description",
            price:200000,
            type: COURSE_TYPE.THEORY,
            grade: GRADES.GRADE11,
            thumbnailUrl: "string",
            createdAt: "Date",
            updatedAt: "Date",
            isHidden: false
        },
        // {
        //     id: 4,
        //     name: "Lượng giác căn bản",
        //     teacher:"Lê Văn Tâm",
        //     views:150,
        //     users: 40,
        //     isFree: false,
        //     price:50000,
        //     level: GRADES.GRADE11,
        //     totalLecture: 16,
        //     description: "Description"
        // },
        // {
        //     id: 5,
        //     name: "Giải Phương trình bậc n",
        //     teacher:"Lê Văn Tâm",
        //     views:150,
        //     users: 100,
        //     isFree: false,
        //     price:80000,
        //     level: GRADES.GRADE12,
        //     totalLecture: 16,
        //     description: "Description"
        // },
        // {
        //     id: 6,
        //     name: "Hình học không gian căn bản",
        //     teacher:"Lê Văn Tâm",
        //     views:150,
        //     users: 150,
        //     isFree: false,
        //     price:100000,
        //     level: GRADES.GRADE10,
        //     totalLecture: 16,
        //     description: "Description"
        // },
        // {
        //     id: 7,
        //     name: "Tích vô hướng nâng cao",
        //     teacher:"Lê Văn Tâm",
        //     views:150,
        //     users: 30,
        //     isFree: false,
        //     price:90000,
        //     level: GRADES.GRADE11,
        //     totalLecture: 16,
        //     description: "Description"
        // },
        // {
        //     id: 8,
        //     name: "Tìm diện tích khối trụ",
        //     teacher:"Lê Văn Tâm",
        //     views:150,
        //     users: 30,
        //     isFree: false,
        //     price:80000,
        //     level: GRADES.GRADE12,
        //     totalLecture: 16,
        //     description: "Description"
        // },
        // {
        //     id: 9,
        //     name: "Tìm diện tích khối trụ",
        //     teacher:"Lê Văn Tâm",
        //     views:150,
        //     users: 170,
        //     isFree: false,
        //     price:80000,
        //     level: GRADES.GRADE11,
        //     totalLecture: 16,
        //     description: "Description"
        // },
        // {
        //     id:10,
        //     name: "Tìm diện tích khối trụ",
        //     teacher:"Lê Văn Tâm",
        //     views:150,
        //     users: 10,
        //     isFree: false,
        //     price:130000,
        //     level: GRADES.GRADE10,
        //     totalLecture: 16,
        //     description: "Description"
        // },
        // {
        //     id:11,
        //     name: "Toán tổng hợp",
        //     teacher:"Lê Văn Tâm",
        //     views:150,
        //     users: 10,
        //     isFree: false,
        //     price:130000,
        //     level: GRADES.GRADE10,
        //     totalLecture: 16,
        //     description: "Description"
        // }
    ];

    constructor(){
        
    }

    getListCourseGrade(level_: GRADES):Observable<Course[]>{
        const courses= this.courses.filter(course =>course.grade==level_);
        return of(courses);
    }

    getListCourse():Observable<Course[]>{
        const courses= this.courses;
        return of(courses);
    }

    getCourseById(id : string):Observable<Course>{
        const course = this.courses.find(cour => cour.id==id)!;
        return of(course);
    }

    getCourses(){
        return this.courses;
    }

    getListCourseFilter(courseType: COURSE_TYPE ,grade: GRADES):Observable<Course[]>{
        const courses= this.courses.filter(course =>course.grade==grade && course.type == courseType);
        return of(courses);
    }

    getListCourseByTitle(title: string):Observable<Course[]>{
        const courses = this.courses.filter(course => course.title == title);
        return of(courses);
    }
}