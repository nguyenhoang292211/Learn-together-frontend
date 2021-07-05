import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DepositRequest } from "../models/deposit-request.model";
import { STATUSES } from "../models/statuses";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
  })

export class DepositRequestService{

    private depositRequests: DepositRequest[] = [{
        id: "01",
        learnerId: "user01",
        amount: 10000,
        imageUrl: "",
        depositRequestStatus: STATUSES.PENDING,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        id: "02",
        learnerId: "user02",
        amount: 10000,
        imageUrl: "",
        depositRequestStatus: STATUSES.PENDING,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        id: "03",
        learnerId: "user03",
        amount: 10000,
        imageUrl: "",
        depositRequestStatus: STATUSES.PENDING,
        createdAt: new Date(),
        updatedAt: new Date()
    },


    {
        id: "03",
        learnerId: "user01",
        amount: 10000,
        imageUrl: "",
        depositRequestStatus: STATUSES.CONFIRM,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        id: "04",
        learnerId: "user01",
        amount: 10000,
        imageUrl: "",
        depositRequestStatus: STATUSES.DENIED,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "05",
        learnerId: "user03",
        amount: 10000,
        imageUrl: "",
        depositRequestStatus: STATUSES.CONFIRM,
        createdAt: new Date(),
        updatedAt: new Date()
    },


    {
        id: "06",
        learnerId: "user02",
        amount: 10000,
        imageUrl: "",
        depositRequestStatus: STATUSES.CONFIRM,
        createdAt: new Date(),
        updatedAt: new Date()
    },


    {
        id: "07",
        learnerId: "user01",
        amount: 10000,
        imageUrl: "",
        depositRequestStatus: STATUSES.PENDING,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        id: "08",
        learnerId: "user03",
        amount: 10000,
        imageUrl: "",
        depositRequestStatus: STATUSES.CONFIRM,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

    getAll(): Observable<DepositRequest[]>{
            return of (this.depositRequests);
    }

    getAllNotYetConfirm():Observable<DepositRequest[]>{
        const depositRequests = this.depositRequests.filter(depositRequest => depositRequest.depositRequestStatus == STATUSES.PENDING);
        return of (depositRequests);
}

    getByIdLearner(learnerId : string): Observable<DepositRequest[]>{
        const depositRequests = this.depositRequests.filter(depositRequest => depositRequest.learnerId == learnerId);
        return of (depositRequests);
    }

    getByLearner(learner: User): Observable<DepositRequest[]>{
        const depositRequests = this.depositRequests.filter(depositRequest => depositRequest.learnerId == learner.id);
        return of (depositRequests);
    }

    setStatusName(deposit: DepositRequest): string{
        if(deposit.depositRequestStatus == STATUSES.CONFIRM || deposit.depositRequestStatus == STATUSES.DENIED)
            return deposit.depositRequestStatus + " " + deposit.updatedAt;
        return deposit.depositRequestStatus;
    }

    isPending(deposit: DepositRequest):boolean{
        if(deposit.depositRequestStatus == STATUSES.PENDING)
            return true;
        return false;
    }

    updateStatus(deposit: DepositRequest, status: STATUSES){
        // update status
        // add wallet to wallet learner
        // return true;
    }
}