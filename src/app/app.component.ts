import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-my-component-converter></app-my-component-converter>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coinverter';
}
