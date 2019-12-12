import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  emailid; 
  formdata;
  public persondata = [];
  public albumdetails = [];

  todaydateService;
  componentproperty;
   constructor(private myservice: MyserviceService) {}
   ngOnInit() { 
      this.todaydateService = this.myservice.showTodayDate(); 
      console.log(this.myservice.serviceproperty); 
      this.myservice.serviceproperty = "component created"; 
      // value is changed. 
      this.componentproperty = this.myservice.serviceproperty; 


      this.myservice.getData().subscribe((data) => {
        this.persondata = Array.from(Object.keys(data), k=>data[k]);
        console.log(this.persondata);
     });

     this.myservice.getDataPictures().subscribe((data) => {
      this.albumdetails = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.albumdetails);
   });

     this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
         Validators.required,
         Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
   });
      

   } 

  todaydate = new Date(); 
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}; 


  // declared array of months. 
  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"];

  isavailable = true; //variable is set to false

  myClickFunction(event) {
    
    this.isavailable = !this.isavailable; 
    // variable is toggled onclick of the button 
 }

 changemonths(event) {
  alert("Changed month from the Dropdown");
  console.log("Changed month from the Dropdown");
  console.log(event);
}

passwordvalidation(formcontrol) {
  if (formcontrol.value.length < 5) {
     return {"passwd" : true};
  }
}

onClickSubmit(data) {this.emailid = data.emailid;}

}
