import { COURSE_TYPE } from './course-type';
import { GRADES } from './grades';
export class Course{

    id:string ="";
    title:string="";
    description:string ="";
    price: number = 0;
    type: COURSE_TYPE = COURSE_TYPE.THEORY;
    grade: GRADES = GRADES.GRADE10;
    thumbnailUrl: string = "url";
    createdAt: string = "";
    updatedAt: string = "";
    isHidden: boolean = false;
}