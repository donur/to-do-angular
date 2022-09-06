import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor() { }

   model = new Model();


  

  

  getName() {
    return this.model.name; 
  }

  getItems() {
    return this.model.items;
  }

  ngOnInit(): void {
  }

}
