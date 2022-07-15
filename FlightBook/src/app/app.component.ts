import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightBook';

 // public productt : any;
  searchKey:string="";
  constructor(private _auth:AuthService){

  }
  /*ngOnInit(): void { }

  }
search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.cartservice.search.next(this.searchTerm);

}*/
  LoggedIn(input:boolean){
    if(input){
      return this._auth.loggedIn();
    }
    else{
      return !this._auth.loggedIn();
    }
  }
  LogOut(){
    this._auth.logoutUser();
  }
}