import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

import { FormGroup, FormControl } from '@angular/forms';

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

     this.formdata = new FormGroup({ 
      emailid: new FormControl("angular@gmail.com"),
      passwd: new FormControl("abcd1234") 
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

onClickSubmit(data) {this.emailid = data.emailid;}

}
