import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NAMED_ENTITIES } from '@angular/compiler';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  @Input()
  pravasi:string="NA";
  voted=false;

  @Output()
  complete= new EventEmitter();

  onClick(value:boolean){
    console.log('invoked onclick from TripComponent')
    this.voted=true;
    this.complete.emit(value);
    
  }


  constructor() {
    console.log('Invoked trip component')
   }

  ngOnInit() {
  }

}
