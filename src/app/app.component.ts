import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <p>{{title}}</p>
    `
})

export class AppComponent implements OnInit {
  title: string
  constructor() {}

  ngOnInit() {
    // we call a service that gets us the data //
    this.title = 'hello darling'
  }
}
