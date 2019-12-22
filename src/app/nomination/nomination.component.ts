import { Component, OnInit, OnDestroy } from '@angular/core';
import {NominationModel} from './nomination.model';

@Component({
  selector: 'app-nomination',
  templateUrl: './nomination.component.html',
  styleUrls: ['./nomination.component.css']
})
export class NominationComponent implements OnInit,OnDestroy {

  nmodel:NominationModel = new NominationModel('devaraj','prajakeya','Shimogga','one Home');
  constructor() {
    console.log('invoked Nomination component')
   }

  ngOnInit() {
    console.log('invoked on in it for nominationcomponent')
  }

  ngOnDestroy(){
    console.log('invoked on destroy it for nomination component')
  }

}
