import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // baseUrl: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  fetchAllCourses() {
    return this.http.get(environment.baseUrl)

  }
  deleteCourse(id: number) {
    return this.http.delete(environment.baseUrl +'/' + id)
  }
  addCourse(course: any){
    return this.http.post(environment.baseUrl, course )
  }
}
