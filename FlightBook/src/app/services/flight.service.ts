import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
  })
export class FlightService {



    private _flightUrl = "https://localhost:44354/api/Flight";
    constructor(private http: HttpClient, private _router: Router) { }


    getFlights() {
        return this.http.get<any>(this._flightUrl);
    }

}