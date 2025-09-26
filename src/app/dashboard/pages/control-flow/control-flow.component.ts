import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'C' | 'F';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');

  toggleContent() {
    this.showContent.update(value => !value);
  }
}
