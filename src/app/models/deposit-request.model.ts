import { STATUSES } from "./STATUSES";

export class DepositRequest{
    learnerId: string = "";
    amount: number = 0;
    imageUrl: string = "";
    createdAt: string = "";
    updatedAt: string = "";
    status:STATUSES = STATUSES.PENDING;
}