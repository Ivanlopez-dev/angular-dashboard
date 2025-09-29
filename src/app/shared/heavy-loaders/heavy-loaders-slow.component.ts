import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [NgClass],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loader Slow
    </section>
  `,
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    const start = Date.now();

    // ⚠️ Blocking Execution process
    console.log('❌ Program blocked: HeavyLoader Component');
    while (Date.now() - start < 3000) {

    }

    console.log('☑️ Loaded: Program free again');
  }
}
