import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  displayAll: boolean = false;
  inputText: string = '';

  constructor() {
    this.model.items = this.getItemsFromLocalStorage();
  }

  model = new Model();

  addItem() {
    if (this.inputText != '') {
      let data = {description: this.inputText, action: false}
      this.model.items.push(data);

      let items = this.getItemsFromLocalStorage();
      items.push(data);
      localStorage.setItem("items", JSON.stringify(items));
      this.inputText = "";
    } else {
      alert("Please enter value");
    }
  }

  getItemsFromLocalStorage() {
    let items: TodoItem[] = [];

    let value = localStorage.getItem("items");

    if(value != null){
      items = JSON.parse(value);

    }

    return items;
  }

  onActionChanged(item: TodoItem) {
    let items = this.getItemsFromLocalStorage();

    localStorage.clear();

    items.forEach(i => {
      if(i.description == item.description) {
        i.action = item.action;
      }
    });

    localStorage.setItem("items", JSON.stringify(items));

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

  displayCount() {
    return this.model.items.filter((i) => i.action).length;
  }

  getBtnClasses() {
    return {
      disabled: this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-primary': this.inputText.length > 0,
    };
  }

  ngOnInit(): void {}
}
