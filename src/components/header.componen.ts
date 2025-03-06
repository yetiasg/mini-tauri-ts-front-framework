import { Component } from "./component.component";

// Komponent nagłówka (H1, H2, etc.)
export class Header extends Component {
  constructor(
    level: number = 1 | 2 | 3 | 4 | 5 | 6,
    text: string,
    classes: string
  ) {
    super(`h${level}` as keyof HTMLElementTagNameMap, classes);
    this.setText(text);
  }
}
