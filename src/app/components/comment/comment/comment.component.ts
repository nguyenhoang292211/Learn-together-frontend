import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comment } from 'src/app/models/comment.model';
import { Course } from 'src/app/models/course.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { listComment } from 'src/app/util/mockData';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class CommentComponent implements OnInit {

  learner!: User;
  avatarUrl!: string | null;
  isLoggedin: boolean=false;
  commentList:Comment[]=[];
  @Input() course!:Course;

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    //*check if loggedin==true, allow to comment 

    if(localStorage.getItem('isLoggedin')=='true')
    {
      this.isLoggedin= true;
      this.learner=this.userService.getUserInLocalStore();
      if(localStorage.getItem('uphotoUrl'))
      {
        this.avatarUrl=localStorage.getItem('uphotoUrl');
      } 
    }
  }

  
}
