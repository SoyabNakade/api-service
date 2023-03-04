import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  title = 'api_services';
  
  no=10;
  square:number=0;
  products:any;
 
  constructor(private api:ApiService,private http:HttpClient ){

  }

  ngOnInit(): void {
  this.square=this.api.square(this.no);
  this.http.get("https://fakestoreapi.com/products").subscribe((result:any)=>{
  console.log(result);
   this.products=result;  
  });

  }
}
