import { Component, OnInit } from '@angular/core';
import { RowdyService } from './rowdy.service';
import { RowdyModel } from './rowdy.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rowdy',
  templateUrl: './rowdy.component.html',
  styleUrls: ['./rowdy.component.css']
})
export class RowdyComponent implements OnInit {
model:RowdyModel= new RowdyModel("JayRam","Srirampura",27);
rowdyList;

  constructor(private rservice:RowdyService,private http:HttpClient) { }

  ngOnInit() {
  }

  onSaveInfo(){
    console.log('invoke onSaveInfo');
    this.rservice.saveInfo(this.model);

  }

  onFetch(){
    console.log('invoke OnFetch');
   
    console.log("invoked getInfo");
    let observable= this.http.get('http://x-workz.mj.milesweb.cloud/x-workz-api/v2/fetchData/deva').subscribe(data=>{
        console.log('data is available');
        console.log(data);
        this.rowdyList=<[]>data['storedDataList'];
    });
}

}
