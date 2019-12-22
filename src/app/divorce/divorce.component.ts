import { Component, OnInit ,Input, EventEmitter, Output  } from '@angular/core';


@Component({
  selector: 'app-divorce',
  templateUrl: './divorce.component.html',
  styleUrls: ['./divorce.component.css']
})
export class DivorceComponent implements OnInit {

  hname;
  wname;
  since;
  reason;

  checked=true;

  constructor() {
    console.log('invoked divorce component')
   }

  ngOnInit() {
  }

  @Output()
  complete= new EventEmitter();

  onApply(){
    console.log('invoked onApply from divorce Component')
    console.log(this.hname);
    console.log(this.wname);
    console.log(this.since);
    console.log(this.reason);
  }

  onCheck(value:boolean){
    console.log('invoked onCheck from divorce component');
    this.checked=!this.checked;
    this.complete.emit(value);
  }
}
