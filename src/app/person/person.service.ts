import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()

export class PersonService{
    constructor(private http:HttpClient){
        console.log('invoked PersonService');
    }

    get PersonInfo(){
      // return{ "name":"Devaraj","email":"yahoo","age":25};
      let observable=this.http.get('assets/person.json');
      console.log('observable');
      return observable;
    };
}