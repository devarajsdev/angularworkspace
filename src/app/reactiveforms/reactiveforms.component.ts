import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {

  success=false;
stadium= new FormGroup({
  name: new FormControl('Kantirava',[Validators.minLength(10),Validators.required]),
  location: new FormControl('Bluru'),
  type: new FormControl('Outdoor'),
  since: new FormControl('1947')

});

  constructor() {
    console.log('invoked reactivecomponent');
   }

   onSubmit(){
     console.log('stadium successfully saved')
     this.success=true;
   }
   get fc(){
     return this.stadium.controls;
   }

}
