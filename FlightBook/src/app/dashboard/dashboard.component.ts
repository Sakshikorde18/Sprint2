import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { flight } from '../models/flight';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  flightservice: any;

  constructor(public httpc:HttpClient) {
  }

  flightModel: flight = new flight();
  flightModels: Array<flight> = new Array<flight>();
  Addflight() {
    console.log(this.flightModel);
   

    var flightto={
      flightNo:Number(this.flightModel.flightNo),  
      
      airline:this.flightModel.airline,
      
      fromPlace:this.flightModel.fromPlace,
     
      toPlace:this.flightModel.toPlace,
     
      startDateTime:this.flightModel.startDateTime,
      
      endDateTime:this.flightModel.endDateTime,
  
      days:this.flightModel.days,

      instrument:this.flightModel.instrument,

      businessSeats:this.flightModel.businessSeats,
      
      nonBusinessSeats:this.flightModel.nonBusinessSeats,
      
      ticketCost:Number(this.flightModel.ticketCost),
      
      rows:Number(this.flightModel.rows),
      
      meal:this.flightModel.meal,

      logo:this.flightModel.logo,

      isActive:this.flightModel.isActive,
      
    }
    this.httpc.post("https://flightbook20220718154132.azurewebsites.net/api/Flight",flightto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.flightModel = new flight();
    
  }
  PostSuccess(res:any){
    console.log(res);
    
  }
  PostError(res:any){
    console.log(res);
  }
  Editflight(input: flight) {
    this.flightModel = input;
  }
  Deleteflight(input: flight) {
    var index=this.flightModels.indexOf(input);
    this.flightModels.splice(index,1);
  }
  getData(){
    console.log("Hi");
    this.httpc.get("https://flightbook20220718154132.azurewebsites.net/api/Flight").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  
  GetSuccess(input:any){
    this.flightModels=input;
  }
  GetError(input:any){
    console.log(input);
  }
  
  
}