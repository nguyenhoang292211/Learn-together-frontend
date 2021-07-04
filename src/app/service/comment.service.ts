import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Comment } from "../models/comment.model";
import { listComment } from "../util/mockData";

@Injectable({
    providedIn: 'root'
  })
export class CommentService{
    
    constructor(){}

    //TODO:  send post request to create new sub comment
    /**
     * 
     * @param comment 
     * @param parentId 
     */
    createSubComment(comment: Comment, parentId:string){

    }

  
    //TODO:send get request comments by lecture id
  /**
   * 
   * @param lectureId 
   * @returns Observable<Comment[]>
   */
  getCommentByLectureId(lectureId:string):Observable<Comment[]>{
    
    return of(listComment.filter(comment=> comment.lectureId== lectureId));
  }


}