import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flight } from '../models/flight';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _flightservice: FlightService,private _router:Router) { }

  flights: Array<flight> = new Array<flight>();
  ngOnInit(): void {

    this._flightservice.getFlights().subscribe(res => this.flights = res, err => console.log(err))
  }
  goto(){
    this._router.navigate(['/booking']);
  }

}
