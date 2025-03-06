export class Component {
  protected element: HTMLElement;

  constructor(tagName: keyof HTMLElementTagNameMap, classes: string) {
    this.element = document.createElement(tagName);
    if (classes.length) this.addClasses(classes);
  }

  // Ustawia tekst zawartości elementu
  public setText(text: string): this {
    this.element.textContent = text;
    return this;
  }

  // Ustawia zawartość HTML elementu
  public setHTML(html: string): this {
    this.element.innerHTML = html;
    return this;
  }

  // Ustawia atrybut elementu
  public setAttribute(name: string, value: string): this {
    this.element.setAttribute(name, value);
    return this;
  }

  // Dodaje nasłuchiwanie na zdarzenie
  public addEvent(
    eventName: string,
    handler: EventListenerOrEventListenerObject
  ): this {
    this.element.addEventListener(eventName, handler);
    return this;
  }

  // Dodaje klasy do elementu
  public addClasses(classes: string): this {
    this.element.classList.add(...classes.split(" ").map((el) => el.trim()));
    return this;
  }

  // Dodaje inny komponent jako dziecko
  public addChild(child: Component): this {
    this.element.appendChild(child.render());
    return this;
  }

  // Dodaje wiele komponentów jako dzieci (ułatwia zagnieżdżanie)
  public setChildren(children: Component[]): this {
    children.forEach((child) => this.addChild(child));
    return this;
  }

  // Dodaje ten komponent jako dziecko innego komponentu.
  // Jeśli komponent jest już dołączony do innego elementu, dodawana jest jego kopia.
  public childOf(parent: Component): this {
    if (this.element.parentElement) {
      parent.addChild(this.clone());
    } else parent.addChild(this);
    return this;
  }

  // Metoda klonująca komponent (głębokie kopiowanie elementu)
  public clone(): this {
    // Tworzymy nowy obiekt tego samego typu bez wywoływania konstruktora
    const cloned = Object.create(this.constructor.prototype) as this;
    cloned.element = this.element.cloneNode(true) as HTMLElement;
    return cloned;
  }

  // Zwraca gotowy element DOM
  public render(): HTMLElement {
    return this.element;
  }
}
