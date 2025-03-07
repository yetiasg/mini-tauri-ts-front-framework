import { Component } from "./component.component";

// Komponent akapitu
export class Paragraph extends Component {
  constructor(text: string, classes: string = "") {
    super("p", classes);
    this.setText(text);
  }
}
