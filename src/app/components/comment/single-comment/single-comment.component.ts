import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { User } from 'src/app/models/user.model';
import { authenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SingleCommentComponent implements OnInit {

  learner!: User;
  avatarUrl!: string | null;
  isLoggedin: boolean=false;
  
  @Input() lectureId!:string;
  @Input() commentList: Comment[]=[]; 
  commentInput:string="";

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

  createSubComment(){
    const comment: Comment= {
      id:   "1",
      text: this.commentInput,
      parentId: "",
      userId: this.learner.id ,
      lectureId:  this.lectureId,
      createdAt:  Date.now.toString(),
      updatedAt:  "",
      idHidden: false
    }
  }

}
