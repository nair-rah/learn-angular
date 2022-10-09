import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  newServerName: string = "";
  newServerContent: string = "";

  // On 'Add Server' button click event with the following data type is emitted
  // @Output exposed this event to other components which use 'app-cockpit' to listen. 

  @Output() serverCreated: EventEmitter<{ name: string; content: string }> =
    new EventEmitter<{
      name: string;
      content: string;
    }>();

  // On 'Add Blueprint' button click event with the following data type is emitted
  // @Output exposed this event to other components which use 'app-cockpit' to listen.

  @Output() blueprintCreated: EventEmitter<{ name: string; content: string }> =
    new EventEmitter<{
      name: string;
      content: string;
    }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    // this emits a new event with the provided object
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
