import { Component, Input, OnInit } from '@angular/core';
import { courses } from '../courses';
// import CardComponent from './app.card';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('courses') courses: Array<courses> = []
  constructor() { }

  ngOnInit(): void {
  }

}
