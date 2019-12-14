import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private finaldata = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  private apiUrlPictures = "https://jsonplaceholder.typicode.com/photos";
  private apiUrlUsers = "http://jsonplaceholder.typicode.com/users";

  serviceproperty = "Service Created";
  constructor(private http: HttpClient) { }
  getData() {
      return this.http.get(this.apiurl);
   }

   getDataPictures() {
    return this.http.get(this.apiUrlPictures);
 }

 getDataUsers() {
  return this.http.get(this.apiUrlUsers);
}


  showTodayDate() { 
    let ndate = new Date(); 
    return ndate; 
 }  

}
