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
    [0, 0, 0, 0, 0]
  ];
  baris = 0;
  kolom = 0;
  myCounter = 0;
  counterWin1 = 0;
  counterWin2 = 0;
  win1 = false;
  win2 = false;

  isKlik() {
    if (this.myCounter % 2 == 0) {
      this.boardGame[this.baris - 1][this.kolom - 1] = 1;
    } else {
      this.boardGame[this.baris - 1][this.kolom - 1] = 2;
    }

    //cek horizontal

    for (let i = 0; i < 5; i++) {
      this.counterWin1 = 0;
      this.counterWin2 = 0;
      for (let j = 0; j < 5; j++) {
        if (this.boardGame[i][j] == 1) {
          this.counterWin1 += 1;
          if (this.counterWin1 == 4) {
            this.win1 = true;
            break;
          }
        } else if (this.boardGame[i][j] == 2) {
          this.counterWin2 += 1;
          if (this.counterWin2 == 4) {
            this.win2 = true;
            break;
          }
        }
      }

      if (this.win1 == false && this.win2 == false) {
        //cek vertical
        for (let i = 0; i < 5; i++) {
          this.counterWin1 = 0;
          this.counterWin2 = 0;
          for (let j = 0; j < 5; j++) {
            if (this.boardGame[j][i] == 1) {
              this.counterWin1 += 1;
              if (this.counterWin1 == 4) {
                this.win1 = true;
                break;
              }
            } else if (this.boardGame[j][i] == 2) {
              this.counterWin2 += 1;
              if (this.counterWin2 == 4) {
                this.win2 = true;
                break;
              }
            }
          }
        }
      }
    }

    this.myCounter += 1;
  }
}
