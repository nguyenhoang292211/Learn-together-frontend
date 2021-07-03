import { Lession } from "./lession.model";

export class Section{

    id: string = "";
    title: string = "";
    courseId: string = "";
    order: number = 0;
    createdAt: string = "";
    updatedAt: string = "";
    isHidden: boolean = false;

    constructor(public name:string,
                public lessions:Lession[]){
                }
}