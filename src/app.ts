import { Button } from "./components/button.component";
import { Container } from "./components/container.component";
import { Dialog } from "./components/dialog.component";
import { Header } from "./components/header.componen";
import { Checkox } from "./components/checkbox.component";
import { ListItem } from "./components/list-item.component";
import { List } from "./components/list.component";
import { Paragraph } from "./components/paragraph.component";
import { Input } from "./components/input.component";

// <div>
//   <p>siema</p>
// </div>;

type ToDo = {
  id: number;
  name: string;
  done: boolean;
};

export class App {
  private root: HTMLElement;

  private todos: ToDo[] = [];

  constructor(root: HTMLElement) {
    this.root = root;
    this.init();
  }

  init(): void {
    // Stworzenie głównego kontenera aplikacji
    const app = new Container("text-black p-10 bg-blue-200 w-[100] h-[590px]");

    // Stworzenie headera
    new Header(1, "Todo list", "text-3xl font-bold mb-4").childOf(app);

    const todosList = new List();
    for (const todo of this.todos) {
      const todoItem = new ListItem(
        "my-4 p-2 border border-dashed rounded-xl border-gray-400 w-full bg-blue-100 flex items-center justify-between hover:bg-blue-300"
      ).childOf(todosList);
      new Paragraph(todo.name).childOf(todoItem);
      new Checkox(todo.done).childOf(todoItem);
    }
    todosList.childOf(app);

    // Tworzymy dialog, który będzie ponownie wykorzystywany
    const dialog = new Dialog();
    const dialogButton = new Button(
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    );

    dialogButton
      .setText("Dodaj item")
      .onClick(() => {
        const inputData = { name: "" };

        const dialogContent = new Container("flex flex-col items-start");

        // Tworzymy zawartość dialogu
        dialogContent.addChild(
          new Paragraph("Dodaj item do listy", "mb-4 text-gray-700")
        );

        new Input("border border-dashed rounded-xl h-8 p-2")
          .onChange((event: any) => {
            console.log({ a: event.target.value });
            inputData.name = event.target.value;
          })
          .childOf(dialogContent);

        const closeBtn = new Button(
          "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
        )
          .setText("Zamknij")
          .onClick(() => dialog.close());

        const addBtn = new Button(
          "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
        )
          .setText("Dodaj")
          .onClick(() => {
            const todoItem = new ListItem(
              "my-4 p-2 border border-dashed rounded-xl border-gray-400 w-full bg-blue-100 flex items-center justify-between hover:bg-blue-300"
            ).childOf(todosList);
            new Paragraph(inputData.name).childOf(todoItem);
            new Checkox(false).childOf(todoItem);
            dialog.close();
          });

        new Container("flex gap-2 my-4 w-full")
          .setChildren([closeBtn, addBtn])
          .childOf(dialogContent);

        // Tworzymy dialog, ustawiamy zawartość i otwieramy
        dialog.setContent(dialogContent).open();
      })
      .childOf(app);

    this.root.appendChild(app.render());
  }
}
