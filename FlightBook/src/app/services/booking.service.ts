import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
  })
export class BookingService {



    private _bookingtUrl = "https://localhost:44354/api/Booking";
    constructor(private http: HttpClient, private _router: Router) { }


    getBookings() {
        return this.http.get<any>(this._bookingtUrl);
    }

}