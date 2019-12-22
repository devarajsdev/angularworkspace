import { Component, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit,OnDestroy {
  
  goingCount=0;
  notGoingCount=0;

  onCount(value:boolean){
    console.log('invoked onload from Interaction component')
    console.log('Invoked interaction component');
    if(value)this.goingCount++; else this.notGoingCount++;
  }

  constructor() {
    console.log('Invoked interaction component');
   
   }

  ngOnInit() {
    console.log('Invoked On in It')
  }

  ngOnDestroy(){
    console.log('Invoked destroyIt')
  }

}
