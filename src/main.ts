import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {DraganddropComponent} from './draganddrop/draganddrop.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, DraganddropComponent],
  template: `
  <app-draganddrop></app-draganddrop>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
