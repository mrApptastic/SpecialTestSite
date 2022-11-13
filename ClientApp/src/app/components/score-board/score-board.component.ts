import { Component, NgZone, OnInit } from '@angular/core';
import { ScoreboardService } from '@services/scoreboard.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: "app-score-board",
  templateUrl: "./score-board.component.html",
  styleUrls: ["./score-board.component.scss"]
})
export class ScoreBoardComponent implements OnInit {
  txtMessage = "";
  uniqueID: string = new Date().getTime().toString();
  messages = new Array<Message>();
  message = new Message();

  constructor(private scoreboardService: ScoreboardService,
    private _ngZone: NgZone
    ) {
      this.subscribeToEvents();
    }

  ngOnInit() {}

  sendMessage(): void {
    if (this.txtMessage) {
      this.message = new Message();
      this.message.clientuniqueid = this.uniqueID;
      this.message.type = "sent";
      this.message.message = this.txtMessage;
      this.message.date = new Date();
      this.messages.push(this.message);
      this.scoreboardService.sendMessage(this.message);
      this.txtMessage = "";
    }
  }
  private subscribeToEvents(): void {

    this.scoreboardService.messageReceived.subscribe((message: Message) => {
      this._ngZone.run(() => {
        if (message.clientuniqueid !== this.uniqueID) {
          message.type = "received";
          this.messages.push(message);
        }
      });
    });
  }
}
