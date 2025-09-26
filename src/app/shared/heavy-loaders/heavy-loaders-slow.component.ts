import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [],
  template: `<h1>Hello, world!</h1>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HeavyLoadersSlowComponent { }
