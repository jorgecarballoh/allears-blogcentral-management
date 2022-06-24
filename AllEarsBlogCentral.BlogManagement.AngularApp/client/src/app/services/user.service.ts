import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { User } from "../shared/User";

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
      
    }

    public getUsers(): Observable<User[]> {
       return this.http.get<User[]>(`${environment.endpointUri}api/user/all`);
    }

}