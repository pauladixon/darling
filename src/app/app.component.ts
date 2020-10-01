import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <p>{{title}}</p>
    `
})

export class AppComponent implements OnInit {
  title = 'darling'
  constructor() {}

  ngOnInit() {

  }
}
