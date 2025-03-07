import { Component } from "./component.component";

export class ListItem extends Component {
  constructor(classes: string = "") {
    super("li", classes);
  }
}
