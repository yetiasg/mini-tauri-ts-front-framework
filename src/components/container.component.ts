import { Component } from "./component.component";

export class Container extends Component {
  constructor(classes: string) {
    super("div", classes);
  }
}
