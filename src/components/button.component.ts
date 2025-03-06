import { Component } from "./component.component";

export class Button extends Component {
  constructor(classes: string) {
    super("button", classes);
  }

  public onClick(handler: EventListenerOrEventListenerObject): this {
    this.addEvent("click", handler);
    return this;
  }
}
