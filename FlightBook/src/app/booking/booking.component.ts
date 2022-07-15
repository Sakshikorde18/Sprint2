
import { HttpClient } from '@angular/common/http';
import { booking } from '../models/booking';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public httpc:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  bookingModel: booking = new booking();
  bookingModels: Array<booking> = new Array<booking>();
  Addbooking() {
    console.log(this.bookingModel);
    //this.CustmerModels.push(this.CustomerModel);

    var bookingto={
        
      name:this.bookingModel.name,
      email:this.bookingModel.email,
      passengerDetails:this.bookingModel.passengerDetails,
      meal:this.bookingModel.meal,
      seatNo:Number(this.bookingModel.seatNo),

      

    }
    this.httpc.post("https://localhost:44354/api/Booking",bookingto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.bookingModel = new booking();
  }
  PostSuccess(res:any){
    console.log(res);
    
  }
  PostError(res:any){
    console.log(res);
  }
  EditBooking(input: booking) {
    this.bookingModel = input;
  }
  DeleteBooking(input: booking) {
    var index=this.bookingModels.indexOf(input);
    this.bookingModels.splice(index,1);
  }
  getBookings(){
    console.log("Hi");
    this.httpc.get("https://localhost:44354/api/Booking").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  
  GetSuccess(input:any){
    this.bookingModels=input;
  }
  GetError(input:any){
    console.log(input);
  }
  
  
}
