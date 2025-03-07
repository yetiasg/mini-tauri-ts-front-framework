import { Component } from "./component.component";

export class Input extends Component {
  constructor(classes: string = "") {
    super("input", classes);
    this.setAttribute("type", "text");
    this.setAttribute("name", "todo");
  }

  public onChange(handler: EventListenerOrEventListenerObject): this {
    this.addEvent("change", handler);
    return this;
  }
}
