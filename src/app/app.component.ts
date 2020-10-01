import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <app-friends></app-friends>
    `
})

export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
