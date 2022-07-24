import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { flightUrl } from './Api';


@Injectable({
    providedIn: 'root'
  })
export class FlightService {


    public search = new BehaviorSubject<string>("");
    
    private _flightUrl = flightUrl;
    
    constructor(private http: HttpClient, private _router: Router) { }
   
    flightUser(user: any) {
        return this.http.post<any>(this._flightUrl, user);
      }

    getFlights() {
        return this.http.get<any>(this._flightUrl);
    }
    

}