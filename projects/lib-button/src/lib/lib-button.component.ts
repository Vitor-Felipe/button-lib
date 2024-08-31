import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-lib-button',
  template: `
   <button>
    {{btValue}}
   </button>
  `,
  styles: [
  ]
})
export class LibButtonComponent {
  @Input() btValue: string = '';
}
