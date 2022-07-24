import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class flight
{
    id:number=0;
    flightNo:number=0;
    airline:string='';
    fromPlace:string='';
    toPlace:string='';
    startDateTime:string='';
    endDateTime:string='';
    days:string='';
    instrument:string='';
    businessSeats:string='';
    nonBusinessSeats:string='';
    ticketCost:number=0;
    rows:number=0;
    meal:string='';
    logo:string='';
    isActive:number=0;
    formLoginGroup:FormGroup;
    
    constructor(){
        var _builder=new FormBuilder();
        this.formLoginGroup=_builder.group({});
        this.formLoginGroup.addControl("flightNoControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("airlineControl",new FormControl('',Validators.required));
    
    }
}


