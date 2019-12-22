import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { Injectable } from '@angular/core';
//import { Injector } from '@angular/core';

@Injectable()

export class ShipService{
    constructor(private http:HttpClient){
        console.log('invoked Ship Service');
    }

    get shipDetails(){
        let observable=this.http.get('assets/ship.json');
        console.log(observable);
        return observable;
    }
}