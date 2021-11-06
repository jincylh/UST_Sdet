import { Component } from '@angular/core';

import { courses } from './courses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  course : Array<courses> =[
    {id:100, title:'Cooking', desc:'Arouse your taste buds with exquisite cuisines', source: "https://images.unsplash.com/photo-1635452065975-c0bc1af6bb48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"},
    {id:101, title:'Music', desc:'Enhance your vocals', source: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
    {id:102, title:'Dance', desc:'Different styles, different perspective',source: "https://media.istockphoto.com/photos/kathak-an-indian-classical-dance-picture-id1267125521?k=20&m=1267125521&s=612x612&w=0&h=iqULsuDUellLQGtqpBPqQIP2eYyeVhijyVTjKB2Hxz4="},
  ]
  
}
