import { Component } from "./component.component";

export class Dialog extends Component {
  private dialogBox: Component;

  constructor() {
    // Główny kontener dialogu: pełny ekran, wyśrodkowany
    super("div", "fixed inset-0 flex items-center justify-center z-50");

    // Backdrop – półprzezroczyste tło
    const backdrop = new Component("div", "fixed inset-0 bg-black opacity-50");
    backdrop.childOf(this);

    // Kontener okna dialogowego – białe tło, padding, zaokrąglone rogi
    const dialogBox = (this.dialogBox = new Component(
      "div",
      "relative bg-white p-6 rounded shadow-lg z-10"
    ));
    dialogBox.childOf(this);
  }

  // Ustawia zawartość okna dialogowego
  public setContent(content: Component): this {
    // Czyścimy poprzednią zawartość
    this.dialogBox.render().innerHTML = "";
    content.childOf(this.dialogBox);
    return this;
  }

  // Otwiera dialog – dodaje go do body
  public open(): this {
    document.body.appendChild(this.render());
    return this;
  }

  // Zamykamy dialog – usuwa go z DOM
  public close(): this {
    const el = this.render();
    if (el.parentElement) el.parentElement.removeChild(el);

    return this;
  }
}
