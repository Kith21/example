import { Component, OnInit } from '@angular/core';
import{customer} from './customer';
import {MyserviceService} from './myservice.service';
@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {



custArray:Array<customer>=new Array();
getData :any[];
model= new  customer(' ',0);

submitted = false; 
onsubmit(){
	this.submitted = true;

}
createCustomer(){
	console.log("customer creation here-->");

	this.custArray.push(new customer(this.model.name, this.model.age ));
	console.log(JSON.stringify(this.custArray));
	
}

//consume service Headers
onTestGet(){
	this._httpService.getUsersDetails().subscribe((res : any[])=>{
		console.log(res);
		this.getData = res;
	});
}




deleteCustomer(index:number,cust:any){

	
	 var index = this.custArray.indexOf(cust);
	console.log(index);
     this.custArray.splice(index, 1);

      // will remove item 
     }	 

/*edit(cust:any){
	 var index = this.custArray.indexOf(cust);
	console.log(index)
	console.log(cust.name)
	console.log(cust.age)
	this.model.name=cust.name
	this.model.age=cust.age
	update(index,cust.name,cust.age)
}*/
updateCustomer(){


}
  constructor(private _httpService: MyserviceService) { }

  ngOnInit() {
  }


/*clickMessage:string='component eg';
onClickMe(){

	console.log('event fired!!');
	this.clickMessage=' Activity works';
}*/
}
