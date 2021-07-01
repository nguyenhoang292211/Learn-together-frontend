import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Course } from "../models/course.model";
import { levelGrade } from "../models/levelGrade";


@Injectable({
    providedIn: 'root'
  })

export class CourseService{

    private courses: Course[]=[{
            id: 1,
            name: "Giải phương trình bậc 3",
            teacher:"Lê Văn Tâm",
            views:120,
            users: 10,
            isFree: false,
            price:150000,
            level: levelGrade.grade10,
            totalLecture: 16,
            description: "Description"
        },
        {
            id: 2,
            name: "Tìm diện tích khối trụ bằng phương pháp căn bản như trên",
            teacher:"Lê Văn Tâm",
            views:150,
            users: 30,
            isFree: false,
            price:170000,
            level: levelGrade.grade11,
            totalLecture: 16,
            description: "Description"
        },
        {
            id: 3,
            name: "Giai tích căn bản",
            teacher:"Lê Văn Tâm",
            views:150,
            users: 50,
            isFree: false,
            price:200000
            ,level: levelGrade.grade11,
            totalLecture: 16,
            description: "Description"
        },
        {
            id: 4,
            name: "Lượng giác căn bản",
            teacher:"Lê Văn Tâm",
            views:150,
            users: 40,
            isFree: false,
            price:50000,
            level: levelGrade.grade11,
            totalLecture: 16,
            description: "Description"
        },
        {
            id: 5,
            name: "Giải Phương trình bậc n",
            teacher:"Lê Văn Tâm",
            views:150,
            users: 100,
            isFree: false,
            price:80000,
            level: levelGrade.grade12,
            totalLecture: 16,
            description: "Description"
        },
        {
            id: 6,
            name: "Hình học không gian căn bản",
            teacher:"Lê Văn Tâm",
            views:150,
            users: 150,
            isFree: false,
            price:100000,
            level: levelGrade.grade10,
            totalLecture: 16,
            description: "Description"
        },
        {
            id: 7,
            name: "Tích vô hướng nâng cao",
            teacher:"Lê Văn Tâm",
            views:150,
            users: 30,
            isFree: false,
            price:90000,
            level: levelGrade.grade11,
            totalLecture: 16,
            description: "Description"
        },
        {
            id: 8,
            name: "Tìm diện tích khối trụ",
            teacher:"Lê Văn Tâm",
            views:150,
            users: 30,
            isFree: false,
            price:80000,
            level: levelGrade.grade12,
            totalLecture: 16,
            description: "Description"
        },
        {
            id: 9,
            name: "Tìm diện tích khối trụ",
            teacher:"Lê Văn Tâm",
            views:150,
            users: 170,
            isFree: false,
            price:80000,
            level: levelGrade.grade11,
            totalLecture: 16,
            description: "Description"
        },
        {
            id:10,
            name: "Tìm diện tích khối trụ",
            teacher:"Lê Văn Tâm",
            views:150,
            users: 10,
            isFree: false,
            price:130000,
            level: levelGrade.grade10,
            totalLecture: 16,
            description: "Description"
        },
        {
            id:11,
            name: "Toán tổng hợp",
            teacher:"Lê Văn Tâm",
            views:150,
            users: 10,
            isFree: false,
            price:130000,
            level: levelGrade.grade10,
            totalLecture: 16,
            description: "Description"
        }
    ];

    constructor(){
        
    }

    getListCourseGrade(level_: levelGrade):Observable<Course[]>{
        const courses= this.courses.filter(course =>course.level==level_);
        return of(courses);
    }

    getListCourse():Observable<Course[]>{
        const courses= this.courses;
        return of(courses);
    }

    getCourseById(id : number):Observable<Course>{
        const course = this.courses.find(cour => cour.id==id)!;
        return of(course);
    }
    getCourses(){
        return this.courses;
    }
}