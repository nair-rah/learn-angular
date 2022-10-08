import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'learn-angular';
  isDisabled: boolean = false;

  toggleColor: boolean = false;
  color: string = '#FFFFFF';

  warningMessages: string[] = [];
  successMessages: string[] = [];

  isMessageToBeDisplayed: boolean = true;
  timestampLog: string[] = [];

  // Runs on reset name button click
  resetTitleOnClick(): void {
    this.title = '';
    console.log(this.title.length);
  }

  // Runs only during event binding for input element
  onInputChange(event: any) {
    this.title = event.target.value;
  }

  // runs on reset color button click
  resetColorOnClick(): void {
    this.toggleColor = !this.toggleColor;
    this.toggleColor ? (this.color = 'lightpink') : (this.color = '#FFFFFF');
  }

  // Adds element in warning messages array on button click
  addWarning() {
    this.warningMessages.push('xxx');
  }
  // Adds element in success messages array on button click
  addSuccess() {
    this.successMessages.push('yyy');
  }

  toggleDisplayMessage(): void {
    let date: Date = new Date();
    this.timestampLog.push(date.toUTCString());
    this.isMessageToBeDisplayed = !this.isMessageToBeDisplayed;
  }
}
