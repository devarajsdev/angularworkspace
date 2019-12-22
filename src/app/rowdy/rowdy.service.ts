import { HttpClient } from '@angular/common/http';
import { RowdyModel } from './rowdy.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RowdyService{
    rowdyList;
    constructor(private http:HttpClient){
        
    }

    saveInfo(rowdy:RowdyModel){
        console.log("invoked saveInfo");
        var json={deva:rowdy};
        let observable =this.http.post('http://x-workz.mj.milesweb.cloud/x-workz-api/v2/save',json).subscribe(data=>{
            console.log('data is saved');
            console.log(data);
        });
        return observable;

    }

    // getInfo(){
    //     console.log("invoked getInfo");
    //     let observable= this.http.get('http://x-workz.mj.milesweb.cloud/x-workz-api/v2/fetchData/deva').subscribe(data=>{
    //         console.log('data is available');
    //         console.log(data);
    //         this.rowdyList=<[]>data;
    //     });
    //     return observable;
    // }
}