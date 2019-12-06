import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular';
  name:string='Full Stack Session'
today=new Date();


clickMessage:string='Morning';
onClickMe(){

	console.log('event fired!!');
	this.clickMessage='Training ! is Active';
}
}