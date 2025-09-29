import { Component } from '@angular/core';

import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum example image"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div
        class="fixed right-56 bg-purple-500 w-56 h-56 rounded-2xl"
        style="view-transition-name: hero2"
      >

      </div>
    </section>
  `,

})
export default class ViewTransitionComponent { }
