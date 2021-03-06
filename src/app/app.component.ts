import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  

 styles:['div{ margin: 0 auto; text-align: center; width:200px; } .rotate {width:100px;height:100px;border:solid 1px red;}'],
 animations: [
  trigger('myanimation',[
     state('smaller',style({
        transform : 'translateY(100px)'
     })),
     state('larger',style({
        transform : 'translateY(0px)'
     })),
     transition('smaller <=> larger',animate('300ms ease-in'))
  ])
]

  
})
export class AppComponent {
  title = 'angular-app';
  emailid; 
  formdata;
  public persondata = [];
  public albumdetails = [];
  public personaldetails = [];

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

   this.myservice.getDataUsers().subscribe((data) => {
    this.personaldetails = Array.from(Object.keys(data), k=>data[k]);
    console.log(this.personaldetails);
 });

     this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
         Validators.required,
         Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
   });
      

   } 

   state: string = "smaller";
   animate() {
      this.state= this.state == 'larger' ? 'smaller' : 'larger';
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

onDrop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
     moveItemInArray(event.container.data, 
        event.previousIndex, event.currentIndex);
  } else {
     transferArrayItem(event.previousContainer.data,
     event.container.data,
     event.previousIndex,
     event.currentIndex);
  }
}

}
