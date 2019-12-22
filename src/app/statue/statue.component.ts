import { Component, OnInit } from '@angular/core';
import { StatueModel } from './statue.model';
import { FrozenService } from '../frozen/frozen.service';

@Component({
  selector: 'app-statue',
  templateUrl: './statue.component.html',
  styleUrls: ['./statue.component.css']
})
export class StatueComponent implements OnInit {
smodel:StatueModel= new StatueModel("",0,"","");
frozen;
// service:FrozenService =  new FrozenService();
  constructor(private service:FrozenService) { 
    this.frozen=this.service.frozenItem;
  }

  ngOnInit() {
    // this.frozen=this.service.frozenItem;
  }

  debug(formRef){
    console.log(formRef);
  }

}
