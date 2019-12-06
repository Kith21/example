import { Directive, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appListhighlight]'
})
export class ListhighlightDirective {
el:ElementRef
@Input() value :string;
  constructor(el:ElementRef) { 

this.el=el;
  	//el.nativeElement.style.backgroundColor = 'yellow';
  }

ngOnInit(){
	console.log("directive: "+this.value);
	this.el.nativeElement.style.backgroundColor=this.value;
}
}
