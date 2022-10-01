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
  successMessages: string[] = []

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

  addWarning() {
    this.warningMessages.push('xxx');
  }
  addSuccess() {
    this.successMessages.push('yyy');
  }
}
