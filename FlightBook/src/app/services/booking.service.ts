import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { bookingUrl } from './Api';


@Injectable({
    providedIn: 'root'
  })
export class BookingService {



    private _bookingtUrl = bookingUrl;
    constructor(private http: HttpClient, private _router: Router) { }


    getBookings() {
        return this.http.get<any>(this._bookingtUrl);
    }
    DeleteBookings(id:any) {
        return this.http.delete<any>(this._bookingtUrl,id);
    }
    Booking(user: any) {
        return this.http.post<any>(this._bookingtUrl, user);
      }

}