import { Component, OnInit } from '@angular/core';
import { Observer, Observable, observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { PersonService } from './person.service';
import { JsonPipe } from '@angular/common';
import { ShipService } from '../service/ship.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private pservice:PersonService,private shipservice:ShipService) { }

  ngOnInit() {
  }
  person={};
  shipList;
  observable:Observable<string>;
  createProducer(){
    console.log('invoked createProducer');
    this.observable=new Observable(observer=>{
      observer.next('Indira Gandi died');
      observer.next('Howda Huliya..');
      observer.complete;

    })
  }

  sub1(){
    console.log('invoked sub1');
    this.observable.subscribe(n=>{
      console.log('got data from next'+n);
    },error=>{
      console.log('handlig error');
    },()=>{
      console.log('no more data');
    });
  }
  sub2(){
    console.log('invoked sub2');
  }

  displayDetails(){
    this.pservice.PersonInfo.subscribe(data=>{
    console.log('got the data'+data);
    console.log(data);
    this.person=data;
    },error=>{
      console.log('got error');
    },()=>{
      console.log('no data');
    });
  }

  onShipDetails(){
    // this.shipList=this.shipservice.shipDetails();
    console.log('invoked onShipDetails');
    this.shipservice.shipDetails.subscribe(data=>{
      console.log(data);
      this.shipList=<[]>data;
      console.log('data is available');
    },error=>{
      console.log('got error');
    })
  }
}
