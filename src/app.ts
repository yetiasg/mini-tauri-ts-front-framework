import { Button } from "./components/button.component";
import { Container } from "./components/container.component";
import { Dialog } from "./components/dialog.component";
import { Header } from "./components/header.componen";
import { Paragraph } from "./components/paragraph.component";

export class App {
  private root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.init();
  }

  init(): void {
    const app = new Container("text-black p-4 bg-gray-200");

    new Header(
      1,
      "Witaj w apce stworzonej w OOP",
      "text-3xl font-bold mb-4"
    ).childOf(app);

    // new Button(
    //   "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    // )
    //   .setText("Kliknij mnie")
    //   .onClick(() => alert("Click!"))
    //   .childOf(app);

    const nestedContainer = new Container(
      "my-4 p-2 border border-dashed border-gray-400"
    ).childOf(app);
    new Paragraph("Nested component", "text-gray-700").childOf(nestedContainer);

    // Tworzymy dialog, który będzie ponownie wykorzystywany
    const dialog = new Dialog();
    const dialogButton = new Button(
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    );

    dialogButton
      .setText("Otwórz dialog")
      .onClick(() => {
        const dialogContent = new Container("flex flex-col items-center");

        // Tworzymy zawartość dialogu
        dialogContent.addChild(
          new Paragraph("To jest przykładowy dialog.", "mb-4 text-gray-700")
        );
        dialogContent.addChild(
          new Button(
            "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          )
            .setText("Zamknij")
            .onClick(() => dialog.close())
        );

        // Tworzymy dialog, ustawiamy zawartość i otwieramy
        dialog.setContent(dialogContent).open();
      })
      .childOf(app);

    this.root.appendChild(app.render());
  }
}
