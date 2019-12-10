import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

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

}
