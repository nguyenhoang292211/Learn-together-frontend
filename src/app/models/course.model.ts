import {levelGrade} from './levelGrade'
export class Course{

    id:number =0;
    name:string="";
    teacher:string ="";
    views:number=0;
    users: number=0;
    isFree: boolean=false;
    price: number=0;
    level: levelGrade = levelGrade.grade10;
}