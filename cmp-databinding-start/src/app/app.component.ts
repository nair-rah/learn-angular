import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // serverElements is a list of type element, which is defined in app-server-element
  serverElements = [
    { type: "server", name: "TestServer", content: "Just a test" },
  ];

  // The event emitted from app-cockpit is passes as a parameter to this function on click of Add Server
  onServerAdded(serverData: { name: string; content: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.name,
      content: serverData.content,
    });
  }

  onBlueprintAdded(blueprintData: { name: string; content: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.name,
      content: blueprintData.content,
    });
  }
}
