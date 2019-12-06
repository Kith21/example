import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor( private http:HttpClient) { }


  getUsersDetails(){
  	return this.http.get 
  	('https://jsonplaceholder.typicode.com/users');
  		
  	
  }
}
