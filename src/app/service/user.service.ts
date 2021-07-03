import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Enrollment } from "../models/enrollment.model";
import { USER_ROLES } from "../models/user-roles";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
  })

export class UserService{

    private users: User[] = [{
        id : "user01",
        fullName  : "Le Thi Ngoc Yen",
        avatarUrl: "",
        email : "ngocyen174308@gmail.com",
        role :  USER_ROLES.LEARNER,
        balance : 20000,
        createdAt : "",
        updatedAt : "",
    },

    {
        id : "user02",
        fullName  : "Nguyen Thi Minh Hoang",
        avatarUrl: "",
        email : "hoangnguyen@gmail.com",
        role :  USER_ROLES.LEARNER,
        balance : 20000,
        createdAt : "",
        updatedAt : "",
    },

    {
        id : "user03",
        fullName  : "Le Thi Phuong Thao",
        avatarUrl: "",
        email : "thaole@gmail.com",
        role :  USER_ROLES.LEARNER,
        balance : 20000,
        createdAt : "",
        updatedAt : "",
    },
    {
        id : "user03",
        fullName  : "Nguyen Thi Minh Hoang",
        avatarUrl: "",
        email : "nguyenhoang13166@gmail.com",
        role :  USER_ROLES.LEARNER,
        balance : 20000,
        createdAt : "",
        updatedAt : "",

    }
];
    


    getTotalCourses(userId: string):number{
        return 1;
    }

    getAllUser(){
        return this.users;
    }
    
    getListUserByTitle(title: string):Observable<User[]>{
        const users = this.users.filter(user => user.fullName == title || user.email == title);
        return of(users);
    getUserByEmail(email:string): Observable<User>{
        const user = this.users.find(user=>user.email == email)!;
       return of(user);
    }

    buyCourse(userId:string, courseId:string){
        //create a enrollment
        const enrollment: Enrollment={
            courseId:courseId,
            learnerId: userId,
            createdAt: Date.now.toString(),
            updatedAt:Date.now.toString()
        }

        //update balance of user


    }
}