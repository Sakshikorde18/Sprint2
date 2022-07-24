import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class booking
{
    id:number=0;
    name:string='';
    email:string='';
    gender:string='';
    age:number=0;
    meal:string='';
    fromPlace:string='';
    toPlace:string='';
    startDateTime:string='';
    endDateTime:string='';
    seatNo:number=0;
    formBooking:FormGroup;
    constructor(){
        var _builder=new FormBuilder();
        this.formBooking=_builder.group({});
        this.formBooking.addControl("nameControl",new FormControl('',Validators.required));
        this.formBooking.addControl("emailControl",new FormControl('',Validators.required));
        this.formBooking.addControl("genderControl",new FormControl('',Validators.required));
       // this.formBooking.addControl("ageControl",new FormControl('',Validators.required));
        this.formBooking.addControl("mealControl",new FormControl('',Validators.required));
        this.formBooking.addControl("fromPlaceControl",new FormControl('',Validators.required));
        this.formBooking.addControl("toPlaceControl",new FormControl('',Validators.required));
        this.formBooking.addControl("startDateTimeControl",new FormControl('',Validators.required));
        this.formBooking.addControl("endDateTimeControl",new FormControl('',Validators.required));
        //this.formBooking.addControl("seatNoControl",new FormControl('',Validators.required));

    }
} 