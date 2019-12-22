import { Component, OnInit } from '@angular/core';
import { FrozenService } from './frozen.service';

@Component({
  selector: 'app-frozen',
  templateUrl: './frozen.component.html',
  styleUrls: ['./frozen.component.css']
})
export class FrozenComponent implements OnInit {

  frozen;
  service:FrozenService = new FrozenService();
  constructor() { }

  ngOnInit() {
     this.frozen=this.service.frozenItem;
  }

}
