import { Component } from "./component.component";

export class Checkox extends Component {
  constructor(done: boolean, classes: string = "") {
    super("input", classes);
    this.setAttribute("type", "checkbox");
    done && (this.element as any).checked;
  }
}
