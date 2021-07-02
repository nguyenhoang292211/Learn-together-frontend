import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
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
    }
];
    constructor(){}
    checkCourseBought():boolean{
        return false;
    }

    getTotalCourses(userId: string):number{
        return 1;
    }

    getAllUser(){
        return this.users;
    }
    
    getListUserByTitle(title: string):Observable<User[]>{
        const users = this.users.filter(user => user.fullName == title || user.email == title);
        return of(users);
    }
}