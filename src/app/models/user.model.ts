import { USER_ROLES } from "./user-roles"

export class User {
    id: string = "";
    fullName:string = "";
    avatarUrl: string = "";
    email: string = "";
    role: USER_ROLES = USER_ROLES.LEARNER;
    balance: number = 0;
    createdAt: string = "";
    updatedAt: string = "";

    constructor(){

    }
  }
  