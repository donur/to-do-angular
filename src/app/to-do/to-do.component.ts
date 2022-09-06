import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  message = "";

  constructor() { }

   model = new Model();

  //  addItem(txtItem: any) {
  //   console.log(txtItem.value);
  //  }

  addItem(value: string) {
    if(value!= "") {
      this.model.items.push ({ description: value, action: "no"})
    } else {
      alert("Please enter value");

    }
  }


  

  

  getName() {
    return this.model.name; 
  }

  getItems() {
    return this.model.items;
  }

  ngOnInit(): void {
  }

}
