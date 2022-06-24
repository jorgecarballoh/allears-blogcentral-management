import { Component, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { User } from "../shared/User";
import { UserService } from "../services/user.service";

@Component({
    selector: "user-list",
    templateUrl:"userListView.component.html"
})
export default class UserListView implements OnInit{

    public usersList: User[] = [];
    destroy$: Subject<boolean> = new Subject<boolean>();


    constructor(public user: UserService) {}

    ngOnInit(): void {
        this.user.getUsers()
                 .pipe(takeUntil(this.destroy$))
            .subscribe(resp => {
                this.usersList = resp;
                console.log(resp);
            })  
        
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
        
    
}