import { Component } from "./component.component";

export class List extends Component {
  constructor(classes: string = "") {
    super("ol", classes);
  }
}
