import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
    <table class="table">
      <tr>
        <th>Roll No</th>
        <th>Name</th>
      </tr>
      <ng-content></ng-content>
    </table>
  `,
  styles: [
  ]
})
export class TableComponent {
  constructor() {}
  ngOnInit() {}
}
