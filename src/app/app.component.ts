import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
        <header class="header">
          <h1>{{ message }}</h1>
        </header>
        <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .app {
        background: #fff;
        border-radius: 8px;
        max-width: 800px;
        width: 94%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #ef9fc7;
      }
      .header {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
         h1 {
          margin: 0;
        }
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!:string;
  ngOnInit() {
    console.log('Student Management!');
    this.message = 'Student Management';
  }
}
