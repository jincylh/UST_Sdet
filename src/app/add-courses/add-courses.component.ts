import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {
  
  constructor(private http:HttpClient) { }

  addCourse(title: string, author:string){
    this.http.post('http://localhost:3000/posts', {title, author} )
    .subscribe((res:any) =>{
      console.log(res);
      // this.courses= res;
  });
}

  ngOnInit(): void {
  }

}
