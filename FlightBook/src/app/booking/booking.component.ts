
import { HttpClient } from '@angular/common/http';
import { booking } from '../models/booking';
import { Component, OnInit } from '@angular/core';
import { bookingUrl } from '../services/Api';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent  {
  BookingData: booking = new booking();
  loginForm: FormGroup | any;
  title = 'material-login';
  constructor(private _router:Router,public httpc:HttpClient) { 
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      meal: new FormControl('', [Validators.required]),
      fromPlace: new FormControl('', [Validators.required]),
      toPlace: new FormControl('', [Validators.required]),
      

    
      })
  }
  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    localStorage.setItem('user',this.loginForm.value)
    this._router.navigate(['/payment'])
  }


  bookingModel: booking = new booking();
  bookingModels: Array<booking> = new Array<booking>();
   Addbooking() {
    console.log(this.bookingModel);
    
    var bookingto={
      id:Number(this.bookingModel.id),  
      name:this.bookingModel.name,
      email:this.bookingModel.email,
      gender:this.bookingModel.gender,
      age:Number(this.bookingModel.age),
      meal:this.bookingModel.meal,
      fromPlace:this.bookingModel.fromPlace,
      toPlace:this.bookingModel.toPlace,
      startDateTime:this.bookingModel.startDateTime,
      endDateTime:this.bookingModel.endDateTime,
      seatNo:Number(this.bookingModel.seatNo),

      

    }
    this.httpc.post(bookingUrl,bookingto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
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
    this.httpc.get(bookingUrl).subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  
  GetSuccess(input:any){
    this.bookingModels=input;
  }
  GetError(input:any){
    console.log(input);
  }
 
}
    

  
    // this._booking.Booking(userDataObject).subscribe(res => {
    //   this.HideSpinner();localStorage.setItem('token',res.token);
    //    this._router.navigate([''])
    //  },
    //    err => console.log(err));
      // this.httpc.post(bookingUrl,userDataObject).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
      // this.bookingModel = new booking();
  
    
   
   

