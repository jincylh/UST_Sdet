import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { University } from '../university';

@Component({
  selector: 'app-view-universities',
  templateUrl: './view-universities.component.html',
  styleUrls: ['./view-universities.component.css']
})
export class ViewUniversitiesComponent implements OnInit {

  constructor(private http: HttpClient) {}
    universities: Array<University> = [
     
    ]
   

  ngOnInit(): void {
    console.log('Called once when component is loaded');
    //http fetch code here--
    this.http.get('http://universities.hipolabs.com/search?country=India')
    .subscribe((res:any) =>{
      console.log(res);
      this.universities= res;
    });

  }

}
