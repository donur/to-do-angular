import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  displayAll: boolean = false;

  constructor() {}

  model = new Model();


  addItem(value: string) {
    if (value != '') {
      this.model.items.push({ description: value, action: false });
    } else {
      alert('Please enter value');
    }
  }

  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }

  ngOnInit(): void {}
}
