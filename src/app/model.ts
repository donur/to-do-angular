import { TodoItem } from "./to-do-item";

export class Model {
    name: string;
    items: TodoItem[];

    constructor() {
        this.name = "Onur";
        this.items = [
            { description: "breakfast", action: "yes"},
            { description: "yoga", action: "yes"},
            { description: "shopping", action: "no"},
            { description: "travel", action: "no"}
        ];
    }
}