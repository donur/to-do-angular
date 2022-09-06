import { TodoItem } from "./to-do-item";

export class Model {
    name: string;
    items: TodoItem[];

    constructor() {
        this.name = "Onur";
        this.items = [
            { description: "breakfast", action: true},
            { description: "yoga", action: true},
            { description: "shopping", action: false},
            { description: "travel", action: false}
        ];
    }
}