import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  boardGame: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  baris = 0;
  kolom = 0;
  myCounter = 0;

  isKlik() {
    // this.checkWin();
    // if (this.myCounter % 2 == 0) {
    //   this.boardGame[this.baris - 1][this.kolom - 1] = 1;
    // } else {
    //   this.boardGame[this.baris - 1][this.kolom - 1] = 2;
    // }
    this.myCounter += 1;
    this.boardGame[2][3] = 24
  }
  checkWin() {}
}
