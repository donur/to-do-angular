import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  private name = "Onur";

  // items = [
  //   "item 1", "item 2", "item 3"
  // ];

  items = [
    { id: 1, description: "breakfast", action: "yes" },
    { id: 2, description: "workout", action: "yes" },
    { id: 3, description: "shopping", action: "no" }
  ];

  getName() {
    return this.name; 
  }

  ngOnInit(): void {
  }

}
