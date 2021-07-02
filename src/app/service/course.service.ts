import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { COURSE_TYPE } from "../models/course-type";
import { Course } from "../models/course.model";
import { Enrollment } from "../models/enrollment.model";
import { GRADES } from "../models/grades";
import {map} from 'rxjs/operators'
import { Lecture } from "../models/lecture.model";

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
            updatedAt: "22/10/2021",
            isHidden: false
        },
        {
            id: "2",
            title: "Tìm diện tích khối trụ bằng phương pháp căn bản như trên",
            description: "Description",
            price:170000,
            type: COURSE_TYPE.THEORY,
            grade: GRADES.GRADE10,
            thumbnailUrl: "string",
            createdAt: "Date",
            updatedAt: "1/8/2020",
            isHidden: false
            
        },
        {
            id: "3",
            title: "Giai tích căn bản",
            description: "Description",
            price:200000,
            type: COURSE_TYPE.THEORY,
            grade: GRADES.GRADE10,
            thumbnailUrl: "string",
            createdAt: "Date",
            updatedAt: "20/7/2020",
            isHidden: false
        },
        {
            id: "4",
            title: "Giai tích căn bản",
            description: "Description",
            price:200000,
            type: COURSE_TYPE.THEORY,
            grade: GRADES.GRADE10,
            thumbnailUrl: "string",
            createdAt: "Date",
            updatedAt: "28/3/2020",
            isHidden: false
        },
        {
            id: "5",
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
        {
            id: "6",
            title: "Giai tích căn bản",
            description: "Description",
            price:200000,
            type: COURSE_TYPE.THEORY,
            grade: GRADES.GRADE11,
            thumbnailUrl: "string",
            createdAt: "Date",
            updatedAt: "Date",
            isHidden: false
        }
        
    ];

    constructor(private http : HttpClient){
        
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
    getstudentJoinedNumber(courseId:string){
        //get enrollment where courseId return list enrollment
        return this.http
        .get<Enrollment[]>('url', 
            {
                params: new HttpParams().set('courseId', courseId)
            }
        )
        // .pipe(
        //     map((responseData) =>{
        //     const enrollments :Enrollment[]=[];
        //     for(let data in responseData)
        //      enrollments.push(data);
            
        //     return enrollments;
        // }));
       
    }

    //get the number of lecture by courseId
    getLectureByCourseId(courseId: string){
        return this.http
        .get<Lecture[]>('URL', 
            {
                params: new HttpParams().set('courseId', courseId)
            }
        )
    }
}